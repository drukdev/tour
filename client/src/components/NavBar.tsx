import { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const navItems = [
    {
      name: 'BHUTAN',
      path: '/bhutan',
      type: 'route',
      sections: [
        { id: 'culture', name: 'Culture', icon: '🎎' },
        { id: 'history', name: 'History', icon: '📜' },
        { id: 'festivals', name: 'Festivals', icon: '🎪' },
        { id: 'geography', name: 'Geography', icon: '🗺️' }
      ]
    },
    {
      name: 'ACCOMMODATION',
      path: '/accommodation',
      type: 'route',
      sections: [
        { id: 'hotels', name: 'Hotels & Resorts', icon: '🏨' },
        { id: 'farmstays', name: 'Traditional Farmstays', icon: '🏡' },
        { id: 'luxury', name: 'Luxury Lodges', icon: '✨' },
        { id: 'budget', name: 'Budget Options', icon: '💰' },
        { id: 'custom-query', name: 'Custom Request', icon: '✏️' }
      ]
    },
    {
      name: 'PACKAGES',
      path: '/packages',
      type: 'route',
      sections: [
        { id: 'cultural', name: 'Cultural Tours', icon: '🏛️' },
        { id: 'trekking', name: 'Trekking', icon: '🥾' },
        { id: 'festival', name: 'Festival Tours', icon: '🎉' },
        { id: 'custom', name: 'Custom Tours', icon: '🛠️' }
      ]
    },
    {
      name: 'FLIGHT',
      path: '/flight',
      type: 'route',
      sections: [
        { id: 'info', name: 'Drukair Info', icon: '✈️' },
        { id: 'schedule', name: 'Flight Schedule', icon: '🕒' },
        { id: 'helicopter', name: 'Helicopter Services', icon: '🚁' }
      ]
    },
    {
      name: 'VISA',
      path: '/visa',
      type: 'route',
      sections: [
        { id: 'requirements', name: 'Requirements', icon: '📋' },
        { id: 'application', name: 'Application', icon: '🖊️' },
        { id: 'guarantee', name: 'Guarantee', icon: '🤝' }
      ]
    },
    {
      name: 'ABOUT',
      path: '/about',
      type: 'route',
      sections: [
        { id: 'story', name: 'Our Story', icon: '📖' },
        { id: 'team', name: 'Team', icon: '👥' },
        { id: 'testimonials', name: 'Testimonials', icon: '🌟' }
      ]
    }
  ];

  const handleMouseEnter = (itemName) => {
    if (!isMobile) {
      setOpenDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !document.activeElement.closest('.dropdown-container')) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderNavItem = (item) => {
    if (item.type === 'route') {
      return (
        <RouterLink
          to={item.path}
          className="text-white hover:text-orange-200 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          onClick={closeAllMenus}
        >
          {item.name}
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={item.path}
        smooth={true}
        duration={500}
        className="text-white hover:text-orange-200 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200"
        onClick={closeAllMenus}
      >
        {item.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="bg-gradient-to-r from-orange-700 to-orange-600 shadow-xl sticky top-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <RouterLink
              to="/"
              className="flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <img src="/logo.png" alt="Bhutan Mind Break" className="h-10" />
              <span className="text-white font-bold text-xl hidden sm:block">Bhutan Mind Break</span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative dropdown-container"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.sections ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`text-white hover:text-orange-200 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 ${
                        openDropdown === item.name ? 'text-orange-200 bg-orange-800/30' : 'hover:bg-orange-700/30'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'transform rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {openDropdown === item.name && (
                      <div
                        className="absolute z-10 left-0 mt-1 w-64 rounded-lg shadow-xl bg-orange-700/95 backdrop-blur-sm border border-orange-600 dropdown-container"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.sections.map((section) => (
                            <RouterLink
                              key={section.id}
                              to={`${item.path}#${section.id}`}
                              className="flex items-center px-4 py-3 text-sm text-white hover:bg-orange-600 hover:text-orange-100 transition-colors duration-200"
                              onClick={closeAllMenus}
                            >
                              {section.icon && <span className="mr-2">{section.icon}</span>}
                              <span>{section.name}</span>
                              {section.id === 'custom-query' && (
                                <span className="ml-auto px-2 py-0.5 text-xs bg-white/20 text-orange-200 rounded-full border border-orange-300">
                                  Special Request
                                </span>
                              )}
                            </RouterLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  renderNavItem(item)
                )}
              </div>
            ))}

            {/* BOOK NOW Button */}
            <RouterLink
              to="/book-now"
              className="ml-4 px-5 py-2.5 bg-white text-orange-600 font-semibold rounded-lg text-sm hover:bg-orange-50 hover:shadow-md transition-all duration-200 flex items-center"
              onClick={closeAllMenus}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              BOOK NOW
            </RouterLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-200 hover:bg-orange-700/30 focus:outline-none transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-orange-700/95 backdrop-blur-sm border-t border-orange-600">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.sections ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full text-left text-white hover:text-orange-200 block px-4 py-3 rounded-lg text-base font-medium flex justify-between items-center transition-colors duration-200 ${
                        openDropdown === item.name ? 'text-orange-200 bg-orange-800/30' : 'hover:bg-orange-700/30'
                      }`}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'transform rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.sections.map((section) => (
                          <RouterLink
                            key={section.id}
                            to={`${item.path}#${section.id}`}
                            className="flex items-center px-4 py-3 text-sm text-white hover:bg-orange-600 hover:text-orange-100 rounded-lg transition-colors duration-200"
                            onClick={closeAllMenus}
                          >
                            {section.icon && <span className="mr-2">{section.icon}</span>}
                            <span>{section.name}</span>
                            {section.id === 'custom-query' && (
                              <span className="ml-auto px-2 py-0.5 text-xs bg-white/20 text-orange-200 rounded-full border border-orange-300">
                                Special
                              </span>
                            )}
                          </RouterLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <RouterLink
                    to={item.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-orange-200 hover:bg-orange-700/30 transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </RouterLink>
                )}
              </div>
            ))}

            {/* Mobile BOOK NOW Button */}
            <RouterLink
              to="/book-now"
              className="block w-full mt-3 px-4 py-3 bg-white text-orange-600 font-semibold rounded-lg text-base text-center hover:bg-orange-50 transition-all duration-200 flex items-center justify-center"
              onClick={closeAllMenus}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              BOOK NOW
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
