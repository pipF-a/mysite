import { ReactNode } from "react"
import Styles from './header.module.scss'
import { ThemeToggle } from "@/components/atoms/ThemeToggle"

interface HeaderProps {
    title:string
}


export const Header =({title} : HeaderProps) => {
    return(
        <header className={Styles.header}>
            <div className={Styles.headerWrap}>
              <h1 className={Styles.headerTitle}>{title}</h1>
              <ThemeToggle/>
            </div>
        </header>
    )

}