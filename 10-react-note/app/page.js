'use client'
import DHBW from "@/components/DHBW";
import Hallo from "@/components/Hallo"
import Halloviele from "@/components/Halloviele"
import Navigation from "@/components/Navigation"
import Zaehler from "@/components/Zaehler"
import Test from "@/components/Test"

export default function Home() {
  const namen = ['Fred', 'Malte', 'Jennifer', 'Jolante']
  const notification = (message) => {
    console.log(message)
  }

  return (
    <main>
      <Navigation page="home" />
      <h1>Home</h1>
      <DHBW />
      <DHBW />
      <DHBW />
      <Hallo name="Horst" gruss="Hallo" />
      <Hallo name="Sabine" gruss="Hey" />
      <Halloviele namen={namen} />
      <Zaehler />
      <Test notification={notification} />

    </main>

  );
}
