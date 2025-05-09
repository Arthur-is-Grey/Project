"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TourSection } from "@/components/tour-section"
import { TrendTourSection } from "@/components/trend-tour-section"
import { MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/panoramic-mountain-landscape.png"
          alt="Beautiful panoramic mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("exploreWorld")}
              <br />
              <span className="inline-block mt-2">&</span>
              <br />
              {t("internationalTravelGuide")}
            </h1>
          </div>

          <div className="mt-10 w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-full p-2 shadow-lg">
              <div className="flex items-center flex-1 px-3 py-2 md:border-r border-gray-200">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder={t("location")}
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center flex-1 px-3 py-2">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder={t("date")}
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>
              <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-medium">{t("search")}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tours - Now using the special TrendTourSection component */}
      <TrendTourSection title={t("trendTravel")} tours={trendingTours} viewAllLink="/tours/trend" />

      {/* Standard Tours - Using the regular TourSection component */}
      <TourSection title={t("standardTravel")} tours={standardTours} viewAllLink="/tours/standard" />

      {/* Kids Tours */}
      <TourSection title={t("kidsTravel")} tours={kidsTours} viewAllLink="/tours/kids" />

      {/* One-Day Tours */}
      <TourSection title={t("oneDayTravel")} tours={oneDayTours} viewAllLink="/tours/one-day" />

      {/* Academic Tours */}
      <TourSection title={t("academicTravel")} tours={academicTours} viewAllLink="/tours/academic" />

      <Footer />
    </div>
  )
}

// Sample data - Updated with more realistic images and locations for trending tours
const trendingTours = [
  {
    id: "tour-1",
    name: "Fuji mountain Tokyo travel",
    location: "Japan Tokyo",
    duration: "5 өдөр",
    rating: 4.9,
    price: 3900,
    image: "/mount-fuji-cherry-blossoms.png",
  },
  {
    id: "tour-2",
    name: "Орка Кемп Каяк аялал",
    location: "Номхон далайн баруун хойд",
    duration: "7 өдөр",
    rating: 5.0,
    price: 4200,
    image: "/kayak-orca.png",
  },
  {
    id: "tour-3",
    name: "Буддын сүм судлал",
    location: "Тайланд",
    duration: "6 өдөр",
    rating: 4.8,
    price: 3500,
    image: "/serene-buddha-temple.png",
  },
  {
    id: "tour-4",
    name: "Тропик арлын аялал",
    location: "Мальдив",
    duration: "8 өдөр",
    rating: 4.9,
    price: 5200,
    image: "/lush-tropical-island.png",
  },
  {
    id: "tour-5",
    name: "Уулын алхалт адал явдал",
    location: "Непал",
    duration: "10 өдөр",
    rating: 4.7,
    price: 3800,
    image: "/mountain-hiking.png",
  },
  {
    id: "tour-6",
    name: "Сафари зэрлэг амьтад",
    location: "Кени",
    duration: "7 өдөр",
    rating: 4.8,
    price: 4500,
    image: "/safari-wildlife.png",
  },
]

const standardTours = [
  {
    id: "standard-1",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "7 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "standard-2",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "6 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "standard-3",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "5 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "standard-4",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "6 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
]

const kidsTours = [
  {
    id: "kids-1",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "5 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "kids-2",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "3 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "kids-3",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "7 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "kids-4",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "2 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
]

const oneDayTours = [
  {
    id: "oneday-1",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "8 цаг",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "oneday-2",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "9 цаг",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "oneday-3",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "8 цаг",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "oneday-4",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "10 цаг",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
]

const academicTours = [
  {
    id: "academic-1",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "7 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "academic-2",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "8 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "academic-3",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "6 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "academic-4",
    name: "Чингис хаан удирдлагын аялал",
    location: "Бали арал",
    duration: "10 өдөр",
    rating: 4.5,
    price: 123000,
    image: "/placeholder.svg?height=600&width=800",
  },
]
