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
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <span className="text-2xl font-bold text-foreground font-serif">SafiCert</span>
    </div>
  )
}
