import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import EmailSignup from '@/react-app/components/Emailsignup';
import TestsSection from '@/react-app/components/Test';
import GamesSection from '@/react-app/components/Games';
import PremiumSection from '@/react-app/components/Premium';
import ReviewsSection from '@/react-app/components/Review';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EmailSignup />
      <TestsSection />
      <GamesSection />
      <PremiumSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

