export interface MenuLinks {
  name: string,
  href: string
}

export interface CardServices {
  icon: React.ReactNode,
  title: string,
  description: string,
  price: string
}

export interface ItemsAbout {
  icon: React.ReactNode,
  title: string,
  description: string
}

export interface CardContact {
  icon: React.ReactNode,
  title: string,
  span01: string
  span02: string
  span03?: string
}

export interface IconsFooter {
  icon: React.ReactNode
}