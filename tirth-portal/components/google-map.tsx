"use client"

import React from "react"
import { InteractiveMap } from "@/components/interactive-map"
import { type MapMarker } from "@/data/yatras"

type GoogleMapProps = {
  center: { lat: number; lng: number }
  zoom?: number
  markers?: MapMarker[]
  routeCoordinates?: { lat: number; lng: number }[]
  title?: string
}

export function GoogleMap({
  center,
  zoom = 10,
  markers = [],
  routeCoordinates = [],
  title = "Pilgrimage Route Map",
}: GoogleMapProps) {
  return (
    <InteractiveMap
      center={center}
      zoom={zoom}
      markers={markers}
      routeCoordinates={routeCoordinates}
      title={title}
    />
  )
}
