import { Bike, Factory, Flame, Home, HeartPulse, Wheat, Zap, GraduationCap, type LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  HeartPulse, Wheat, Bike, Factory, Home, Zap, Flame, GraduationCap,
}

export function ThemeIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Flame
  return <Icon className={className} />
}
