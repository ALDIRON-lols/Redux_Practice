
import styles from "./page.module.css";
import AddUsers from "./Components/AddUsers";
import DisplayUsers from "./Components/DisplayUsers";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <AddUsers />
      <Link href={"/pages/RemoveUser"}>Remove User Page</Link>
      <br />
      <Link href={"/pages/TodoList"}>Todo List Page</Link>
      <br />
      <Link href={"/pages/ApiUsers"}>Api Users Page</Link>
      <DisplayUsers />
    </main>
  );
}
