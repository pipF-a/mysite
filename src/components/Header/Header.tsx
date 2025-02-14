import Styles from '@/components/Header/Header.module.scss'
import { ThemeToggle } from "@/components/parts/ThemeToggle"

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