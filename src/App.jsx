import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Menu, X, Moon, Sun, ExternalLink, Github, Linkedin, Instagram, Mail, ArrowUp, Code, Database, Palette, Zap } from 'lucide-react';
import { projectsdata, programskills, databaseskills, webskills, devops, machinelearning, aboutdetails, experiencedata, educationdata, socialIcon } from './data/constants';

// Theme Context
const ThemeContext = createContext({ isDarkMode: true, toggleTheme: () => {} });

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-black/40' : 'bg-white/40'
    } backdrop-blur-lg border-b ${isDarkMode ? 'border-cyan-500/20' : 'border-blue-300/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                    : isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDarkMode ? 'text-white' : 'text-gray-800'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-lg`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? isDarkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'
                    : isDarkMode ? 'text-gray-300 hover:bg-cyan-500/10' : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section with Interactive Solar System
const HeroSection = () => {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [zoom, setZoom] = useState(1);
  const [cameraOffset, setCameraOffset] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const rotationOffsetRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const hoveredPlanetRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars with depth
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      depth: Math.random() * 0.5 + 0.5
    }));

    // Meteors
    const meteors = [];
    const createMeteor = () => {
      if (Math.random() < 0.02) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.3,
          speed: Math.random() * 3 + 2,
          length: Math.random() * 30 + 20,
          opacity: 1
        });
      }
    };

    // 9 Planets with realistic data
    const planets = [
      { name: 'Mercury', angle: 0, distance: 60, radius: 4, speed: 0.04, color: '#8C7853', tilt: 0.1, info: 'Smallest planet\nClosest to Sun' },
      { name: 'Venus', angle: Math.PI / 4, distance: 90, radius: 6, speed: 0.03, color: '#FFC649', tilt: 0.15, info: 'Hottest planet\nRotates backward' },
      { name: 'Earth', angle: Math.PI / 2, distance: 120, radius: 6.5, speed: 0.025, color: '#4A90E2', tilt: 0.2, moon: true, info: 'Our home\nOnly life known' },
      { name: 'Mars', angle: Math.PI * 0.75, distance: 150, radius: 5, speed: 0.02, color: '#E27B58', tilt: 0.18, info: 'Red planet\nHas 2 moons' },
      { name: 'Jupiter', angle: Math.PI, distance: 200, radius: 15, speed: 0.012, color: '#C88B3A', tilt: 0.25, info: 'Largest planet\nGas giant' },
      { name: 'Saturn', angle: Math.PI * 1.25, distance: 250, radius: 13, speed: 0.009, color: '#FAD5A5', tilt: 0.3, rings: true, info: 'Ringed beauty\nLeast dense' },
      { name: 'Uranus', angle: Math.PI * 1.5, distance: 290, radius: 9, speed: 0.006, color: '#4FD0E7', tilt: 0.22, info: 'Ice giant\nRotates sideways' },
      { name: 'Neptune', angle: Math.PI * 1.75, distance: 330, radius: 8.5, speed: 0.005, color: '#4166F5', tilt: 0.24, info: 'Windiest planet\nFarthest orbit' },
      { name: 'Pluto', angle: Math.PI * 2, distance: 360, radius: 3, speed: 0.004, color: '#C0B2A5', tilt: 0.28, info: 'Dwarf planet\nIcy world' }
    ];

    let animationId;
    let rotation = 0;

    const animate = () => {
      hoveredPlanetRef.current = null;
      
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(135, 206, 235, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Base rotation with time
      rotation += 0.001;

      // Calculate target rotation based on mouse position (normalized -1 to 1)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const mouseOffsetX = (mouseRef.current.x - centerX) / centerX;
      const mouseOffsetY = (mouseRef.current.y - centerY) / centerY;

      // Smoothly interpolate rotation offset for fluid motion
      targetRotationRef.current.x = mouseOffsetX * 1.5;
      targetRotationRef.current.y = mouseOffsetY * 1.5;
      
      rotationOffsetRef.current.x += (targetRotationRef.current.x - rotationOffsetRef.current.x) * 0.15;
      rotationOffsetRef.current.y += (targetRotationRef.current.y - rotationOffsetRef.current.y) * 0.15;

      // Draw stars with parallax
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0) star.twinkleSpeed *= -1;
        
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * 0.01 * star.depth;
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * 0.01 * star.depth;
        
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.radius * star.depth, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${Math.abs(star.opacity)})`
          : `rgba(255, 255, 255, ${Math.abs(star.opacity) * 0.5})`;
        ctx.fill();
      });

      // Draw and update meteors
      createMeteor();
      meteors.forEach((meteor, index) => {
        meteor.x += meteor.speed;
        meteor.y += meteor.speed * 0.5;
        meteor.opacity -= 0.01;

        if (meteor.opacity > 0) {
          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(meteor.x - meteor.length, meteor.y - meteor.length * 0.5);
          ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          meteors.splice(index, 1);
        }
      });

      const canvasCenterX = canvas.width / 2 + cameraOffset.x;
      const canvasCenterY = canvas.height / 2 + cameraOffset.y;

      // Apply zoom and rotation with mouse-influenced tilt
      ctx.save();
      ctx.translate(canvasCenterX, canvasCenterY);
      ctx.scale(zoom, zoom);
      ctx.rotateX = (axis) => {
        // Note: 2D canvas doesn't support 3D rotation, we'll simulate with skew
      };
      ctx.rotate(rotation + rotationOffsetRef.current.x * 2 + rotationOffsetRef.current.y * 1.5);
      ctx.translate(-canvasCenterX, -canvasCenterY);

      // Draw sun with glow
      const sunRadius = 35;
      const sunGlow = ctx.createRadialGradient(canvasCenterX, canvasCenterY, 0, canvasCenterX, canvasCenterY, sunRadius * 2);
      sunGlow.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      sunGlow.addColorStop(0.5, 'rgba(255, 140, 0, 0.4)');
      sunGlow.addColorStop(1, 'rgba(255, 140, 0, 0)');
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(canvasCenterX, canvasCenterY, sunRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      const sunGradient = ctx.createRadialGradient(canvasCenterX, canvasCenterY, 10, canvasCenterX, canvasCenterY, sunRadius);
      sunGradient.addColorStop(0, '#FFF4A3');
      sunGradient.addColorStop(0.5, '#FFD700');
      sunGradient.addColorStop(1, '#FF8C00');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(canvasCenterX, canvasCenterY, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw planets
      planets.forEach((planet, index) => {
        planet.angle += planet.speed;
        
        // 3D orbit with tilt influenced by mouse
        const tiltInfluence = rotationOffsetRef.current.y * 0.2;
        const tiltX = Math.cos(planet.angle) * planet.distance;
        const tiltY = Math.sin(planet.angle) * planet.distance * Math.cos(planet.tilt + tiltInfluence);
        const x = canvasCenterX + tiltX;
        const y = canvasCenterY + tiltY;

        // Draw orbit line with 3D effect
        ctx.beginPath();
        for (let i = 0; i < 360; i += 5) {
          const angle = (i * Math.PI) / 180;
          const ox = canvasCenterX + Math.cos(angle) * planet.distance;
          const oy = canvasCenterY + Math.sin(angle) * planet.distance * Math.cos(planet.tilt + tiltInfluence);
          if (i === 0) ctx.moveTo(ox, oy);
          else ctx.lineTo(ox, oy);
        }
        ctx.closePath();
        ctx.strokeStyle = isDarkMode 
          ? `rgba(100, 255, 218, ${hoveredPlanetRef.current === index ? 0.4 : 0.1})` 
          : `rgba(100, 150, 255, ${hoveredPlanetRef.current === index ? 0.5 : 0.2})`;
        ctx.lineWidth = hoveredPlanetRef.current === index ? 3 : 1;
        ctx.stroke();

        // Check if mouse is hovering over planet
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const hoverRadius = planet.radius * zoom + 15;
        const isHovered = distance < hoverRadius;

        if (isHovered) {
          hoveredPlanetRef.current = index;
          canvas.style.cursor = 'pointer';
        }

        // Draw planet with enhanced glow effect
        if (isHovered) {
          // Multiple glow rings for better effect
          for (let glow = 3; glow > 0; glow--) {
            const glowRadius = planet.radius * (2 + glow * 0.3);
            const glowGradient = ctx.createRadialGradient(x, y, planet.radius, x, y, glowRadius);
            glowGradient.addColorStop(0, planet.color + '40');
            glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        const planetGradient = ctx.createRadialGradient(
          x - planet.radius * 0.3, 
          y - planet.radius * 0.3, 
          planet.radius * 0.1,
          x, 
          y, 
          planet.radius
        );
        planetGradient.addColorStop(0, planet.color);
        planetGradient.addColorStop(1, planet.color + '80');
        ctx.fillStyle = planetGradient;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius * (isHovered ? 1.3 : 1), 0, Math.PI * 2);
        ctx.fill();

        // Add subtle atmosphere
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw Saturn's rings
        if (planet.rings) {
          ctx.beginPath();
          ctx.ellipse(x, y, planet.radius * 2, planet.radius * 0.5, planet.angle * 0.1, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(218, 165, 32, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.ellipse(x, y, planet.radius * 2.3, planet.radius * 0.6, planet.angle * 0.1, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(218, 165, 32, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Draw Earth's moon
        if (planet.moon) {
          const moonAngle = planet.angle * 4;
          const moonDistance = planet.radius * 3;
          const moonX = x + Math.cos(moonAngle) * moonDistance;
          const moonY = y + Math.sin(moonAngle) * moonDistance;
          
          ctx.beginPath();
          ctx.arc(moonX, moonY, planet.radius * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = '#CCCCCC';
          ctx.fill();
        }

        // Draw planet name on hover with background
        if (isHovered) {
          const nameY = y - planet.radius * 3;
          
          ctx.font = 'bold 18px Arial';
          ctx.fillStyle = isDarkMode ? '#00FFFF' : '#0066FF';
          ctx.textAlign = 'center';
          ctx.fillText(planet.name, x, nameY);
          
          // Draw info text below
          ctx.font = '12px Arial';
          ctx.fillStyle = isDarkMode ? '#AAFFFF' : '#0099FF';
          const infoLines = planet.info.split('\n');
          infoLines.forEach((line, i) => {
            ctx.fillText(line, x, nameY + 20 + i * 15);
          });
        }
      });

      ctx.restore();

      // Reset cursor if not hovering
      if (!hoveredPlanetRef.current && !isDraggingRef.current) {
        canvas.style.cursor = 'default';
      }

      // Draw instruction text at the top
      ctx.fillStyle = isDarkMode ? 'rgba(100, 255, 218, 0.7)' : 'rgba(65, 105, 225, 0.7)';
      ctx.font = '14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('Move your cursor to rotate the solar system • Scroll to zoom • Drag to pan', 20, 30);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      if (isDraggingRef.current) {
        const dx = e.clientX - lastMouseRef.current.x;
        const dy = e.clientY - lastMouseRef.current.y;
        setCameraOffset(prev => ({
          x: prev.x + dx,
          y: prev.y + dy
        }));
        lastMouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleMouseLeave = () => {
      hoveredPlanetRef.current = null;
      canvas.style.cursor = 'default';
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.max(0.5, Math.min(3, prev * zoomFactor)));
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-gradient-to-b from-sky-300 to-sky-100'}`}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } animate-fade-in`}>
          {aboutdetails.name}
        </h1>
        <p className={`text-xl md:text-3xl mb-8 ${
          isDarkMode ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          {aboutdetails.tagline}
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg shadow-cyan-500/50'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50'
            }`}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
                : 'bg-white/50 text-gray-900 hover:bg-white/70 backdrop-blur-md border border-gray-300'
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    { title: 'Programming Languages', icon: '⚙️', skills: programskills },
    { title: 'Databases', icon: '🗄️', skills: databaseskills },
    { title: 'Web Development', icon: '🌐', skills: webskills },
    { title: 'DevOps', icon: '🚀', skills: devops },
    { title: 'Machine Learning', icon: '🤖', skills: machinelearning }
  ];

  const iconMap = {
    javascript: '⚡', python: '🐍', c: '©️', cplusplus: '➕',
    java: '☕', solidity: '💎', mongodb: '🍃', mysql: '🔷',
    postgres: '🐘', react: '⚛️', node: '🟢', html: '📄',
    css: '🎨', docker: '🐳', github: '🐙', tensorflow: '🤖',
    pytorch: '🔥', scikit: '📊'
  };

  return (
    <section id="skills" className={`min-h-screen py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-sky-50 via-white to-sky-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          My Skills
        </h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-gray-800/30 border border-gray-700/30' : 'bg-white/50 border border-gray-200/50'
            } backdrop-blur-md`}>
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <span>{category.icon}</span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`group relative overflow-hidden rounded-lg p-4 transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center ${
                      isDarkMode 
                        ? 'bg-gray-700/50 hover:bg-cyan-500/20' 
                        : 'bg-white/70 hover:bg-blue-100'
                    } cursor-pointer`}
                  >
                    <div className="text-3xl mb-2">{iconMap[skill.icon] || '💻'}</div>
                    <p className={`text-sm font-semibold text-center ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={`min-h-screen py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' : 'bg-gradient-to-b from-white via-sky-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsdata.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                isDarkMode 
                  ? 'bg-gray-800/50 border border-gray-700/30'
                  : 'bg-white/70 border border-gray-200/50'
              } backdrop-blur-md shadow-lg`}
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-2 font-medium ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  {project.subtitle}
                </p>
                <p className={`text-sm mb-4 line-clamp-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className={`px-2 py-1 text-xs font-medium ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`relative w-full max-w-4xl rounded-2xl overflow-hidden ${
              isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-2xl max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300"
            >
              <X className="mx-auto" size={20} />
            </button>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="h-64 md:h-full rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 overflow-hidden">
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedProject.title}
                </h2>
                <p className={`text-lg font-medium mb-4 ${
                  isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  {selectedProject.subtitle}
                </p>
                <p className={`mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-cyan-500 text-white hover:bg-cyan-400'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.websiteLink && (
                    <a
                      href={selectedProject.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-sky-50 via-white to-sky-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiencedata.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700/30' : 'bg-white/50 border border-gray-200/50'
              } backdrop-blur-md`}
            >
              <div className="flex items-start gap-6">
                <img 
                  src={exp.image}
                  alt={exp.subtitle}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {exp.subtitle}
                  </p>
                  <p className={`leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>
                  {exp.githubLink && (
                    <a
                      href={exp.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                          : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      }`}
                    >
                      <Github size={18} />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' : 'bg-gradient-to-b from-white via-sky-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Education
        </h2>
        
        <div className="space-y-6">
          {educationdata.map((edu) => (
            <div
              key={edu.id}
              className={`rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-800/30 border border-gray-700/30' : 'bg-white/50 border border-gray-200/50'
              } backdrop-blur-md`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.course}
                  </h3>
                  <p className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {edu.college}
                  </p>
                  <p className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.university}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-semibold ${
                    isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {edu.year}
                  </p>
                  <p className={`font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/shashishekhar9932', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/shashi-shekhar-1a3a1a1a1a/', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/shashishekhar9932/', label: 'Instagram' },
    { Icon: Mail, href: 'mailto:shashiabc9932@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={`relative py-16 overflow-hidden ${
      isDarkMode ? 'bg-black' : 'bg-sky-50'
    }`}>
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-gray-400'}`}
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className={`text-sm mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} {aboutdetails.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isDarkMode 
                ? 'bg-cyan-500 text-white hover:bg-cyan-400'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1); }
        }
      `}</style>
    </footer>
  );
};

// Main App
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
