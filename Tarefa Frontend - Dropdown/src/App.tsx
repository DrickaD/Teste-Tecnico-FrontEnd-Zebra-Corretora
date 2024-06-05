import { Dropdown } from "./dropdown/dropdown";
import style from "./styles.module.scss"

const App = () => {
 

  return (
    <>
        <div className={style.body}>
          <div className={style.green}></div>
          <div className={style.red}></div>
          <div className={style.blue}></div>
          <div className={style.yellow}></div>
          <div className={style.center}>
                <Dropdown/>
          </div>
        </div>
    </>
  )
}

export default App
