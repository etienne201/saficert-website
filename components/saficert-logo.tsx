interface SafiCertLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function SafiCertLogo({ className = "", size = "md" }: SafiCertLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src="/images/saficertlogo.png"
        alt="SafiCert Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
      <span className="text-2xl font-bold text-foreground font-serif">SafiCert</span>
    </div>
  )
}
