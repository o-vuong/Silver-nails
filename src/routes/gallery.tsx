import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Sparkles,
  Heart,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Palette,
  Gem,
  Flower2,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'

export const Route = createFileRoute('/gallery')({ component: GalleryPage })

interface GalleryItem {
  id: string
  title: string
  category: string
  tags: string[]
  technician: string
}

// Using placeholder gallery items with gradient placeholders
const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Rose Gold Elegance', category: 'gel', tags: ['rose gold', 'glitter', 'luxury'], technician: 'Maria' },
  { id: '2', title: 'French Classic', category: 'acrylic', tags: ['french', 'white', 'classic'], technician: 'Sarah' },
  { id: '3', title: 'Marble Art', category: 'nail-art', tags: ['marble', 'white', 'grey'], technician: 'Kim' },
  { id: '4', title: 'Chrome Dreams', category: 'nail-art', tags: ['chrome', 'mirror', 'silver'], technician: 'Maria' },
  { id: '5', title: 'Floral Spring', category: 'nail-art', tags: ['flowers', 'spring', 'pink'], technician: 'Sarah' },
  { id: '6', title: 'Minimalist Lines', category: 'gel', tags: ['minimalist', 'lines', 'nude'], technician: 'Kim' },
  { id: '7', title: 'Glitter Gradient', category: 'gel', tags: ['glitter', 'gradient', 'sparkle'], technician: 'Maria' },
  { id: '8', title: 'Ocean Blue', category: 'nail-art', tags: ['blue', 'ocean', 'waves'], technician: 'Sarah' },
  { id: '9', title: 'Nude Perfection', category: 'manicure', tags: ['nude', 'natural', 'clean'], technician: 'Kim' },
  { id: '10', title: 'Red Carpet', category: 'gel', tags: ['red', 'glamour', 'bold'], technician: 'Maria' },
  { id: '11', title: 'Galaxy Nails', category: 'nail-art', tags: ['galaxy', 'purple', 'stars'], technician: 'Sarah' },
  { id: '12', title: 'Bridal Lace', category: 'acrylic', tags: ['bridal', 'lace', 'white'], technician: 'Kim' },
]

const categories = [
  { id: 'all', name: 'All', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'gel', name: 'Gel', icon: <Gem className="h-4 w-4" /> },
  { id: 'acrylic', name: 'Acrylic', icon: <Star className="h-4 w-4" /> },
  { id: 'nail-art', name: 'Nail Art', icon: <Palette className="h-4 w-4" /> },
  { id: 'manicure', name: 'Manicure', icon: <Flower2 className="h-4 w-4" /> },
]

const gradientColors = [
  'from-pink-300 via-rose-300 to-purple-300',
  'from-amber-200 via-orange-200 to-yellow-200',
  'from-emerald-200 via-teal-200 to-cyan-200',
  'from-blue-200 via-indigo-200 to-violet-200',
  'from-rose-200 via-pink-200 to-fuchsia-200',
  'from-slate-200 via-gray-200 to-zinc-200',
  'from-lime-200 via-green-200 to-emerald-200',
  'from-sky-200 via-blue-200 to-indigo-200',
  'from-amber-100 via-yellow-100 to-orange-100',
  'from-fuchsia-200 via-purple-200 to-indigo-200',
  'from-violet-300 via-purple-300 to-fuchsia-300',
  'from-rose-100 via-pink-100 to-red-100',
]

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handlePrevious = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setSelectedItem(filteredItems[prevIndex])
  }

  const handleNext = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    setSelectedItem(filteredItems[nextIndex])
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Browse our collection of stunning nail art and designs created by our talented technicians
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-6 lg:px-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-accent/10 hover:bg-accent/20 text-foreground'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0 relative">
                  {/* Gradient placeholder for image */}
                  <div className={`aspect-square bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center`}>
                    <Sparkles className="h-12 w-12 text-white/50" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Like button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(item.id)
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedItems.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/70 text-sm">by {item.technician}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-square rounded-lg bg-gradient-to-br ${gradientColors[galleryItems.findIndex(i => i.id === selectedItem.id) % gradientColors.length]} flex items-center justify-center mb-4`}>
              <Sparkles className="h-24 w-24 text-white/50" />
            </div>
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-white/70 mb-4">by {selectedItem.technician}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selectedItem.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="luxury" asChild>
                <Link to="/booking">
                  Book This Style
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 bg-accent/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-muted-foreground mb-8">
            Book an appointment and let our artists create something beautiful for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/booking">
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
