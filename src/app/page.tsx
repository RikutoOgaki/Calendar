import Image from "next/image";
import style from "./page.module.scss";
import dayjs from 'dayjs'

export default function Home() {

  let today = dayjs()
  console.log(today);



  return (
    <>
      <div className={style.Wrap}>

      </div>
    </>
  );
}
