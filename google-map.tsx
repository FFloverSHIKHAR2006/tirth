"use client"

import { useEffect, useRef } from "react"
import type { google } from "google-maps"

type GoogleMapProps = {
  center: { lat: number; lng: number }
  zoom: number
  markers?: { lat: number; lng: number; title: string }[]
  routeCoordinates?: { lat: number; lng: number }[]
}

export function GoogleMap({ center, zoom, markers = [], routeCoordinates = [] }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (typeof window !== "undefined" && !window.google) {
        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=geometry`
        script.async = true
        script.defer = true
        script.onload = initMap
        document.head.appendChild(script)
      } else if (window.google) {
        initMap()
      }
    }

    const initMap = () => {
      if (!mapRef.current || !window.google) return

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [{ visibility: "off" }],
          },
        ],
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      })

      mapInstanceRef.current = map

      // Add markers
      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map,
          title: marker.title,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#d97706",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        })
      })

      // Draw route
      if (routeCoordinates.length > 1) {
        new window.google.maps.Polyline({
          path: routeCoordinates,
          geodesic: true,
          strokeColor: "#d97706",
          strokeOpacity: 0.8,
          strokeWeight: 3,
          map,
        })
      }
    }

    loadGoogleMaps()
  }, [center, zoom, markers, routeCoordinates])

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
      <div ref={mapRef} className="w-full h-full" />
      {/* Fallback when Google Maps API key is not provided */}
      <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 pointer-events-none">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-muted-foreground">Interactive map showing pilgrimage route</p>
          <p className="text-sm text-muted-foreground/70 mt-2">Add Google Maps API key for full functionality</p>
        </div>
      </div>
    </div>
  )
}
