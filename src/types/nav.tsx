export interface NavigationItem {
    name: string,
    title: string,
    href: string,
    current: boolean,
    icon: React.ElementType,
    [key: string]: unknown,
}

export interface SibarProps {
    navigations: NavigationItem[]
}

export interface TopNavProps {
    navigations: NavigationItem[]
}