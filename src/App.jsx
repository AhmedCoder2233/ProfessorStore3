import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Film, Image, Trophy, Palette, Server, Menu, X, ChevronRight, Star, Youtube, Award, Layout, MessageCircle, Users, TrendingUp, ZoomIn } from 'lucide-react';

const ProfessorStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDiscordPopup, setShowDiscordPopup] = useState(false);
  const [selectedDiscordImage, setSelectedDiscordImage] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const openingVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const trailerVideos = [
    {
      id: 1,
      title: "Epic Minecraft Trailer 2",
      description: "Cinematic server showcase",
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/trailor1.mp4"
    },
    {
      id: 2,
      title: "Epic Minecraft Trailer 1",
      description: "Cinematic server showcase",
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/trailor2.mp4"
    },
  ];

  const shortVideos = [
    {
      id: 1,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short1.mp4"
    },
    {
      id: 2,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short2.mp4"
    },
    {
      id: 3,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short3.mp4"
    },
    {
      id: 4,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short4.mp4"
    },
    {
      id: 5,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short6.mp4"
    },
    {
      id: 6,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short7.mp4"
    },
    {
      id: 7,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short8.mp4"
    },
    {
      id: 8,
      videoUrl: "https://k55kufpsrsyss1ua.public.blob.vercel-storage.com/short9.mp4"
    },
  ];

  const socialMediaResults = [
    {
      id: 1,
      title: "Tiktok Growth",
      description: "Follower increased",
      image: "social1.webp",
      stats: "+900% Growth"
    },
    {
      id: 2,
      title: "Tiktok Growth",
      description: "Views Increased",
      image: "social2.webp",
      stats: "500% Increase"
    },
  ];

  const bannerItems = [
    {
      id: 1,
      type: "image",
      src: "banner2.png",
      alt: "Minecraft Voting Banner 1"
    },
    {
      id: 2,
      type: "gif",
      src: "banner.gif",
      alt: "Minecraft Voting Banner 2"
    },
    {
      id: 3,
      type: "gif",
      src: "banner3.gif",
      alt: "Minecraft Voting Banner 3"
    },
    {
      id: 4,
      type: "gif",
      src: "banner4.gif",
      alt: "Minecraft Voting Banner 4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white overflow-hidden">
      {/* Opening Animation */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            key="opening-animation"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={openingVariants}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            style={{
              background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              <Sparkles className="w-20 h-20 mx-auto mb-4 text-red-500" />
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                ProfessorStore
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={showContent ? 'block' : 'hidden'}>
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-red-500/30"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  ProfessorStore
                </span>
              </motion.div>
              
              <div className="hidden md:flex space-x-8">
                {['Home', 'Trailers', 'Shorts', 'Thumbnails', 'Logos', 'Banners', 'Social Media', 'Discord', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed top-16 right-0 w-64 h-screen bg-black/95 backdrop-blur-xl z-40 p-6 border-l border-red-500/30"
          >
            {['Home', 'Trailers', 'Shorts', 'Thumbnails', 'Logos', 'Banners', 'Social Media', 'Discord', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="block py-3 text-gray-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(bg.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-red-950/80 to-black/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="mb-6"
            >
              <Sparkles className="w-20 h-20 mx-auto text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]" />
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl"
            >
              ProfessorStore
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-3xl mb-8 text-gray-300 font-semibold"
            >
              Premium Minecraft Content Services
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(239, 68, 68, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold flex items-center gap-2 shadow-2xl"
              >
                Explore Services <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-500 rounded-full font-bold transition-colors"
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 flex justify-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-red-500 fill-red-500" />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronRight className="w-8 h-8 rotate-90 text-red-500" />
            </motion.div>
          </motion.div>
        </section>

        {/* Trailers Section */}
        <section id="trailers" className="py-24 px-4 relative bg-black/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto relative z-10"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Film className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Epic Trailers
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Cinematic server trailers that showcase your world in stunning detail
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trailerVideos.map((video, i) => (
                <motion.div
                  key={
                    
                    video.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, rotateY: 2 }}
                  className="relative group overflow-hidden rounded-2xl h-72 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <video 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                    muted
                    loop
                    autoPlay  
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Film className="w-20 h-20 text-red-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p className="text-sm text-gray-400">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Shorts Section */}
        <section id="shorts" className="py-24 px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Youtube className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Shorts
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Engaging short-form content perfect for TikTok, YouTube Shorts & Instagram Reels
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {shortVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[9/16] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-black rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                  <video 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                    muted
                    loop
                    autoPlay
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
                    <p className="text-sm font-semibold">{video.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Thumbnails Section */}
        <section id="thumbnails" className="py-24 px-4 relative bg-black/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Image className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Thumbnails/Banners
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Eye-catching thumbnails/banners that boost click-through rates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={`thumbnail${item}.webp`}
                    alt={`Thumbnail ${item}`}
                    className="w-full aspect-video transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-xl font-bold">Thumbnail Design {item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Logos Section */}
        <section id="logos" className="py-24 px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Palette className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Logo Design
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Professional logos that represent your server's unique identity
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-red-500/30 aspect-square flex items-center justify-center">
                    <img 
                      src={`logo${item}.png`}
                      alt={`Logo Design ${item}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Minecraft Voting Site Banners Section */}
        <section id="banners" className="py-24 px-4 relative bg-black/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="flex justify-center gap-4 mb-4">
                <Trophy className="w-16 h-16 text-red-500" />
                <Layout className="w-16 h-16 text-orange-500" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Minecraft Voting Site Banners
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Eye-catching banners for your Minecraft voting sites with static images and animated GIFs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bannerItems.map((banner) => (
                <motion.div
                  key={banner.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="relative group overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  
                  {banner.type === 'gif' ? (
                    <img 
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-48 transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                    />
                  ) : (
                    <img 
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-48 transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                    />
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      banner.type === 'gif' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {banner.type === 'gif' ? 'ANIMATED' : 'STATIC'}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg font-bold">{banner.alt}</h3>
                    <p className="text-sm text-gray-300">
                      {banner.type === 'gif' ? 'Animated Banner' : 'Static Image Banner'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Social Media Management Section */}
        <section id="social-media" className="py-24 px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="flex justify-center gap-4 mb-4">
                <Users className="w-16 h-16 text-red-500" />
                <TrendingUp className="w-16 h-16 text-orange-500" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Social Media Management
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Proven results in growing and engaging communities across all platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {socialMediaResults.map((result, i) => (
                <motion.div
                  key={result.id}
                  variants={itemVariants}
                  className="relative group"
                >
                      <img 
                        src={result.image}
                        alt={result.title}
                        className="w-full"
                      />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Grow Your Social Media?</h3>
                <p className="text-gray-300 mb-6">Let us handle your social media strategy and watch your community thrive</p>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold"
                >
                  Start Growing Today
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Discord Decoration Section */}
        <section id="discord" className="py-24 px-4 relative bg-black/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Server className="w-16 h-16 mx-auto mb-4 text-red-500" />
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Discord Server Decoration
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Complete Discord server branding and aesthetic customization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2].map((item, i) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedDiscordImage(item)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-red-500/30 overflow-hidden">
                    <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                      <img 
                        src={`discord${item}.webp`}
                        alt={`Discord Setup ${item}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <p className="text-white font-semibold">Theme {item}</p>
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-red-400">Discord Theme {item}</h3>
                      <p className="text-gray-400 text-sm">Click to view full server setup</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modal for Full View */}
            <AnimatePresence>
              {selectedDiscordImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                  onClick={() => setSelectedDiscordImage(null)}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative max-w-6xl max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedDiscordImage(null)}
                      className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-10"
                    >
                      <X className="w-8 h-8" />
                    </button>
                    
                    <div className="overflow-auto max-h-[80vh] rounded-2xl">
                      <img 
                        src={`discord${selectedDiscordImage}.webp`}
                        alt={`Discord Setup ${selectedDiscordImage}`}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-black/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Award className="w-20 h-20 mx-auto mb-6 text-red-500" />
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            >
              Ready to Elevate Your Server?
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-8 text-lg"
            >
              Let's create something extraordinary together
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(239, 68, 68, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-full font-bold text-lg shadow-2xl"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </section>

        {/* Discord Icon with Popup */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Popup Message */}
          {showDiscordPopup && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-16 right-0 mb-4 w-64 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-4 shadow-2xl border border-red-400"
            >
              <div className="text-white text-sm font-semibold text-center">
                Click here to order your custom content!
              </div>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-red-600"></div>
            </motion.div>
          )}

          {/* Discord Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setShowDiscordPopup(true)}
            onHoverEnd={() => setShowDiscordPopup(false)}
            className="relative cursor-pointer"
          >
            <a href="https://discord.com/users/779352541501587457">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-orange-600 p-4 rounded-full shadow-2xl border-2 border-red-400">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="py-8 border-t border-red-500/30 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p className="font-semibold">© 2024 ProfessorStore. All rights reserved.</p>
            <p className="mt-2 text-sm">Premium Minecraft Content Creation Services</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProfessorStore;
