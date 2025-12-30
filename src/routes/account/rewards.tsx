import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Gift,
  Star,
  Check,
  ArrowRight,
  Sparkles,
  Crown,
  Gem,
  Award,
} from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/account/rewards')({
  component: RewardsPage,
})

function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState<number | null>(null)

  // Mock loyalty data
  const loyaltyData = {
    points: 450,
    tier: 'silver' as const,
    lifetimeSpend: 1250,
    visitsCount: 28,
  }

  const tiers = {
    bronze: {
      name: 'Bronze',
      icon: Award,
      threshold: 0,
      color: 'from-amber-600 to-amber-800',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount'],
    },
    silver: {
      name: 'Silver',
      icon: Star,
      threshold: 500,
      color: 'from-gray-400 to-gray-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '5% off all services', 'Priority booking'],
    },
    gold: {
      name: 'Gold',
      icon: Crown,
      threshold: 1500,
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '10% off all services', 'Priority booking', 'Free nail art quarterly'],
    },
    platinum: {
      name: 'Platinum',
      icon: Gem,
      threshold: 5000,
      color: 'from-purple-400 to-purple-600',
      benefits: ['Earn 10 points per $1 spent', 'Birthday discount', '15% off all services', 'Priority booking', 'Free nail art monthly', 'Exclusive event invites', 'Free upgrades'],
    },
  }

  const availableRewards = [
    { id: 0, name: 'Free Nail Art (2 nails)', description: 'Add nail art to 2 nails for free', pointsCost: 100 },
    { id: 1, name: '$5 Off Any Service', description: 'Get $5 off your next service', pointsCost: 200 },
    { id: 2, name: 'Free Paraffin Treatment', description: 'Complimentary paraffin treatment', pointsCost: 300 },
    { id: 3, name: '$10 Off Any Service', description: 'Get $10 off your next service', pointsCost: 400 },
    { id: 4, name: 'Free Classic Manicure', description: 'One free classic manicure', pointsCost: 500 },
    { id: 5, name: 'Free Gel Upgrade', description: 'Upgrade to gel polish for free', pointsCost: 350 },
  ]

  const redeemedRewards = [
    { name: '$5 Off Any Service', redeemedAt: 'Dec 10, 2024', used: false },
    { name: 'Free Nail Art (2 nails)', redeemedAt: 'Nov 15, 2024', used: true },
  ]

  const currentTier = tiers[loyaltyData.tier]
  const nextTierKey = loyaltyData.tier === 'bronze' ? 'silver' : loyaltyData.tier === 'silver' ? 'gold' : loyaltyData.tier === 'gold' ? 'platinum' : null
  const nextTier = nextTierKey ? tiers[nextTierKey] : null
  const pointsToNext = nextTier ? nextTier.threshold - loyaltyData.points : 0

  return (
    <div className="min-h-screen bg-accent/5">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
            ← Back to Account
          </Link>
          <h1 className="text-3xl font-bold">Rewards & Loyalty</h1>
          <p className="text-muted-foreground">Earn points, unlock rewards, and enjoy exclusive benefits</p>
        </div>

        {/* Points Summary Card */}
        <Card className={`bg-gradient-to-r ${currentTier.color} text-white mb-8 overflow-hidden`}>
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <currentTier.icon className="h-48 w-48 -mr-12 -mt-12" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <currentTier.icon className="h-6 w-6" />
                <span className="text-lg font-medium">{currentTier.name} Member</span>
              </div>
              <p className="text-5xl font-bold mb-2">{loyaltyData.points}</p>
              <p className="text-white/80">Available Points</p>

              {nextTier && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>{currentTier.name}</span>
                    <span>{nextTier.name}</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${(loyaltyData.points / nextTier.threshold) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-white/80 mt-2">
                    {pointsToNext} more points to reach {nextTier.name}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Rewards */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-secondary" />
                  Available Rewards
                </CardTitle>
                <CardDescription>Redeem your points for these rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {availableRewards.map((reward) => {
                    const canAfford = loyaltyData.points >= reward.pointsCost
                    return (
                      <div
                        key={reward.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          canAfford
                            ? 'border-border hover:border-secondary cursor-pointer'
                            : 'border-border/50 opacity-60'
                        } ${selectedReward === reward.id ? 'border-secondary bg-secondary/5' : ''}`}
                        onClick={() => canAfford && setSelectedReward(reward.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">{reward.name}</p>
                            <p className="text-sm text-muted-foreground">{reward.description}</p>
                          </div>
                          {selectedReward === reward.id && (
                            <Check className="h-5 w-5 text-secondary" />
                          )}
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className={`text-lg font-bold ${canAfford ? 'text-secondary' : 'text-muted-foreground'}`}>
                            {reward.pointsCost} pts
                          </span>
                          {!canAfford && (
                            <span className="text-xs text-muted-foreground">
                              Need {reward.pointsCost - loyaltyData.points} more
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {selectedReward !== null && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="luxury" className="w-full">
                      Redeem {availableRewards[selectedReward].name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Redeemed Rewards */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>My Rewards</CardTitle>
                <CardDescription>Rewards you've redeemed</CardDescription>
              </CardHeader>
              <CardContent>
                {redeemedRewards.length > 0 ? (
                  <div className="space-y-3">
                    {redeemedRewards.map((reward, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                        <div>
                          <p className="font-medium">{reward.name}</p>
                          <p className="text-sm text-muted-foreground">Redeemed {reward.redeemedAt}</p>
                        </div>
                        {reward.used ? (
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Check className="h-4 w-4" /> Used
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                            Active
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-4">No redeemed rewards yet</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Tier Benefits */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Your Benefits</CardTitle>
                <CardDescription>{currentTier.name} tier perks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentTier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tier Progression */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Membership Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(tiers).map(([key, tier]) => {
                  const isCurrentTier = key === loyaltyData.tier
                  const isUnlocked = loyaltyData.points >= tier.threshold
                  return (
                    <div
                      key={key}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        isCurrentTier ? 'bg-secondary/10 border border-secondary' : ''
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                        <tier.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{tier.name}</p>
                        <p className="text-xs text-muted-foreground">{tier.threshold}+ points</p>
                      </div>
                      {isCurrentTier && (
                        <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">Current</span>
                      )}
                      {isUnlocked && !isCurrentTier && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Visits</span>
                  <span className="font-bold">{loyaltyData.visitsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lifetime Spend</span>
                  <span className="font-bold">${loyaltyData.lifetimeSpend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Points Earned</span>
                  <span className="font-bold">{loyaltyData.lifetimeSpend * 10}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
