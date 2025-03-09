import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Shield,
  Calendar,
  Users,
  MessageSquare,
  Lock,
  GraduationCap,
} from 'lucide-react';
import React from 'react';
import LandingHeader from '@/app/components/landing-header';
import LandingFooter from '@/app/components/landing-footer';

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col justify-center'>
      <LandingHeader />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Your Mental Health Journey Starts Here
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Connect with licensed mental health professionals and start
                    your path to wellness today. Schedule sessions, track
                    progress, and take control of your mental health.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/signup'>
                    <Button size='lg' className='px-8'>
                      Get Started
                    </Button>
                  </Link>
                  <Link href='#how-it-works'>
                    <Button variant='outline' size='lg' className='px-8'>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src='https://kzmgnm46veyy91930llu.lite.vusercontent.net/placeholder.svg?height=550&width=550'
                width={550}
                height={550}
                alt='Mental health support illustration'
                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover'
              />
            </div>
          </div>
        </section>

        {/* Mental Health Importance Section */}
        <section
          id='about'
          className='w-full py-12 md:py-24 lg:py-32 bg-background'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Why Mental Health Matters
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Mental health is just as important as physical health. Taking
                  care of your mind affects every aspect of your life.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
                <div className='rounded-full bg-primary/10 p-4'>
                  <Heart className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Improved Wellbeing</h3>
                <p className='text-center text-muted-foreground'>
                  Mental health care leads to better overall wellbeing and
                  quality of life.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
                <div className='rounded-full bg-primary/10 p-4'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Better Relationships</h3>
                <p className='text-center text-muted-foreground'>
                  Improved mental health helps build stronger, healthier
                  relationships with others.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
                <div className='rounded-full bg-primary/10 p-4'>
                  <Shield className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Increased Resilience</h3>
                <p className='text-center text-muted-foreground'>
                  Mental health support builds resilience to handle life&apos;s
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id='how-it-works'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  How MindfulCare Works
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Our platform makes it easy to connect with mental health
                  professionals and get the support you need.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                  1
                </div>
                <h3 className='text-xl font-bold'>Create an Account</h3>
                <p className='text-center text-muted-foreground'>
                  Sign up and complete a brief assessment to help us understand
                  your needs.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                  2
                </div>
                <h3 className='text-xl font-bold'>Match with Providers</h3>
                <p className='text-center text-muted-foreground'>
                  Browse and select from our network of licensed mental health
                  professionals.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                  3
                </div>
                <h3 className='text-xl font-bold'>Schedule Sessions</h3>
                <p className='text-center text-muted-foreground'>
                  Book appointments and connect through secure video calls or
                  messaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section
          id='privacy'
          className='w-full py-12 md:py-24 lg:py-32 bg-background'
        >
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <Image
                src='https://kzmgnm46veyy91930llu.lite.vusercontent.net/placeholder.svg?height=550&width=550'
                width={550}
                height={550}
                alt='Privacy and security illustration'
                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                    Your Privacy is Our Priority
                  </h2>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    We understand the sensitive nature of mental health.
                    That&apos;s why we&apos;ve built our platform with privacy
                    and security at its core.
                  </p>
                </div>
                <ul className='grid gap-6'>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <Lock className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>End-to-End Encryption</h3>
                      <p className='text-muted-foreground'>
                        All sessions and messages are encrypted and secure.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <Shield className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>Anonymous Profiles</h3>
                      <p className='text-muted-foreground'>
                        You control what information you share with providers.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <Users className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>HIPAA Compliant</h3>
                      <p className='text-muted-foreground'>
                        Our platform adheres to strict healthcare privacy
                        standards.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Providers Section */}
        <section
          id='providers'
          className='w-full py-12 md:py-24 lg:py-32 bg-muted'
        >
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                    Join Our Provider Network
                  </h2>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Are you a licensed mental health professional? Join our
                    platform to expand your practice and help more people.
                  </p>
                </div>
                <ul className='grid gap-6'>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <GraduationCap className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>Qualified Professionals</h3>
                      <p className='text-muted-foreground'>
                        We accept licensed psychologists, therapists, and
                        counselors with psychology degrees.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <Calendar className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>Flexible Scheduling</h3>
                      <p className='text-muted-foreground'>
                        Set your own hours and availability to fit your
                        lifestyle.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='rounded-full bg-primary/10 p-1'>
                      <MessageSquare className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-bold'>Secure Platform</h3>
                      <p className='text-muted-foreground'>
                        Conduct sessions through our HIPAA-compliant video and
                        messaging tools.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/providers/apply'>
                    <Button size='lg' className='px-8'>
                      Apply Now
                    </Button>
                  </Link>
                  <Link href='/providers/learn-more'>
                    <Button variant='outline' size='lg' className='px-8'>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src='https://kzmgnm46veyy91930llu.lite.vusercontent.net/placeholder.svg?height=550&width=550'
                width={550}
                height={550}
                alt='Mental health professional'
                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover'
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Start Your Mental Health Journey Today
                </h2>
                <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join thousands of others who have taken the first step toward
                  better mental health.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Link href='/signup'>
                  <Button variant='secondary' size='lg' className='px-8'>
                    Sign Up Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
