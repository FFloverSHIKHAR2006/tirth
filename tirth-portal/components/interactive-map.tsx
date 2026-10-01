"use client"

import React, { useState, useMemo } from "react"
import { MapPin, Navigation as NavIcon, ZoomIn, ZoomOut, RotateCcw, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type MapMarker } from "@/data/yatras"
import { useLanguage } from "@/context/language-context"

interface InteractiveMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  markers: MapMarker[]
  routeCoordinates?: { lat: number; lng: number }[]
  title?: string
  className?: string
}

export function InteractiveMap({
  center,
  markers,
  routeCoordinates = [],
  title = "Pilgrimage Route Map",
  className = "",
}: InteractiveMapProps) {
  const { t } = useLanguage()
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [zoomLevel, setZoomLevel] = useState<number>(1)

  // Calculate bounding box for SVG projection
  const bounds = useMemo(() => {
    const points = [
      ...markers.map((m) => ({ lat: m.lat, lng: m.lng })),
      ...routeCoordinates,
      center,
    ]

    if (points.length === 0) {
      return { minLat: 27, maxLat: 28, minLng: 80, maxLng: 81 }
    }

    let minLat = Infinity
    let maxLat = -Infinity
    let minLng = Infinity
    let maxLng = -Infinity

    points.forEach((p) => {
      if (p.lat < minLat) minLat = p.lat
      if (p.lat > maxLat) maxLat = p.lat
      if (p.lng < minLng) minLng = p.lng
      if (p.lng > maxLng) maxLng = p.lng
    })

    // Add 15% padding
    const latPadding = Math.max((maxLat - minLat) * 0.18, 0.04)
    const lngPadding = Math.max((maxLng - minLng) * 0.18, 0.04)

    return {
      minLat: minLat - latPadding,
      maxLat: maxLat + latPadding,
      minLng: minLng - lngPadding,
      maxLng: maxLng + lngPadding,
    }
  }, [markers, routeCoordinates, center])

  // Project lat/lng to SVG viewBox (0 0 1000 650)
  const project = (lat: number, lng: number): { x: number; y: number } => {
    const width = 1000
    const height = 650
    const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * width
    // Invert Y because latitude goes north (up) but SVG coordinates go down
    const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * height
    return { x, y }
  }

  // Generate SVG polyline path
  const routePath = useMemo(() => {
    if (routeCoordinates.length < 2) return ""
    return routeCoordinates
      .map((coord, idx) => {
        const { x, y } = project(coord.lat, coord.lng)
        return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
      })
      .join(" ")
  }, [routeCoordinates, bounds])

  // Google Maps Deep Link URL for external navigation
  const googleMapsUrl = useMemo(() => {
    if (markers.length > 0) {
      const first = markers[0]
      return `https://www.google.com/maps/search/?api=1&query=${first.lat},${first.lng}`
    }
    return `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`
  }, [markers, center])

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.8), 2.0))
  }

  const handleReset = () => {
    setZoomLevel(1)
    setSelectedMarker(null)
  }

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-border/80 bg-card shadow-lg ${className}`}>
      {/* Top Map Header & Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-border/80 shadow-md pointer-events-auto flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-serif font-semibold text-foreground text-sm sm:text-base">
            {title}
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
            {markers.length} {markers.length === 1 ? "Stop" : "Stops"}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-background/90 backdrop-blur-md p-1 rounded-xl border border-border/80 shadow-md pointer-events-auto">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-foreground hover:text-primary"
            onClick={() => handleZoom(0.2)}
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-foreground hover:text-primary"
            onClick={() => handleZoom(-0.2)}
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-foreground hover:text-primary"
            onClick={handleReset}
            title="Reset View"
            aria-label="Reset map view"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-2 text-xs font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t("openInGoogleMaps")}</span>
          </a>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className="relative w-full h-[520px] bg-gradient-to-br from-amber-50/40 via-background to-secondary/30 dark:from-stone-950/60 dark:via-background dark:to-stone-900/40 overflow-hidden select-none">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />

        <div
          className="w-full h-full transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 1000 650"
            className="w-full h-full"
            aria-label="Sacred Pilgrimage Route Map"
            role="img"
          >
            <defs>
              {/* Route Gradient */}
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.9" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#d97706" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Route Polyline Background Glow */}
            {routePath && (
              <path
                d={routePath}
                fill="none"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
            )}

            {/* Route Polyline Primary Line */}
            {routePath && (
              <path
                d={routePath}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="4"
                strokeDasharray="8 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />
            )}

            {/* Waypoint Markers */}
            {markers.map((marker, index) => {
              const { x, y } = project(marker.lat, marker.lng)
              const isSelected = selectedMarker?.title === marker.title

              return (
                <g
                  key={index}
                  transform={`translate(${x}, ${y})`}
                  className="cursor-pointer transition-all duration-200 group"
                  onClick={() => setSelectedMarker(marker)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Marker for ${marker.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedMarker(marker)
                    }
                  }}
                >
                  {/* Ping Animation for selected marker */}
                  {isSelected && (
                    <circle r="22" fill="#f59e0b" opacity="0.3" className="animate-ping" />
                  )}

                  {/* Marker Outer Base */}
                  <circle
                    r={isSelected ? "16" : "13"}
                    fill={isSelected ? "#d97706" : "#ffffff"}
                    stroke={isSelected ? "#ffffff" : "#d97706"}
                    strokeWidth="2.5"
                    className="drop-shadow-md transition-all group-hover:scale-110"
                  />

                  {/* Inner Ring */}
                  <circle
                    r={isSelected ? "8" : "6"}
                    fill={isSelected ? "#ffffff" : "#d97706"}
                  />

                  {/* Marker Number Text */}
                  <text
                    textAnchor="middle"
                    dy="3.5"
                    fontSize="9"
                    fontWeight="bold"
                    fill={isSelected ? "#d97706" : "#ffffff"}
                    className="pointer-events-none select-none"
                  >
                    {index + 1}
                  </text>

                  {/* Label below marker */}
                  <text
                    textAnchor="middle"
                    y="25"
                    fontSize="11"
                    fontWeight="600"
                    fill="currentColor"
                    className="text-foreground fill-current drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] select-none transition-all group-hover:font-bold"
                  >
                    {marker.title.length > 20
                      ? `${marker.title.substring(0, 18)}…`
                      : marker.title}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Selected Marker Detail Card Overlay */}
        {selectedMarker && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-30 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-primary/30 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground text-base leading-tight">
                    {selectedMarker.title}
                  </h4>
                  {selectedMarker.description && (
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {selectedMarker.description}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground/80 mt-2 font-mono">
                    📍 {selectedMarker.lat.toFixed(4)}° N, {selectedMarker.lng.toFixed(4)}° E
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground shrink-0"
                onClick={() => setSelectedMarker(null)}
                aria-label="Close stop details"
              >
                ✕
              </Button>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                {t("spiritualGuidance")}
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedMarker.lat},${selectedMarker.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-primary hover:underline gap-1"
              >
                <NavIcon className="w-3 h-3" />
                {t("openInGoogleMaps")}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Horizontal Quick-Select Stops Strip */}
      <div className="p-3 bg-secondary/30 border-t border-border/80 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-border py-2.5">
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap pl-2">
          {t("parikramaStops")}:
        </span>
        {markers.map((m, idx) => {
          const isSelected = selectedMarker?.title === m.title
          return (
            <button
              key={idx}
              onClick={() => setSelectedMarker(m)}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm"
                  : "bg-background/80 text-foreground/80 border-border hover:border-primary/50 hover:bg-accent"
              }`}
            >
              <span className="mr-1 opacity-70">#{idx + 1}</span>
              {m.title.length > 22 ? `${m.title.substring(0, 20)}…` : m.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
