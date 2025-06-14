import { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Card, 
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom
} from '@mui/material'
import { 
  Menu as MenuIcon, 
  Palette as DesignIcon,
  Architecture as ArchitectureIcon,
  Brush as BrushIcon,
  Palette as PaletteIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Pinterest as PinterestIcon,
  Web as WebIcon,
  PhoneAndroid as MobileIcon,
  Business as BusinessIcon,
  ViewInAr as ModelingIcon
} from '@mui/icons-material'

const services = [
  {
    title: 'Interior Design',
    description: 'Transform your space with our expert interior design services, creating harmonious and functional environments.',
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    color: '#2D3047',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Graphic Design',
    description: 'Elevate your brand with stunning visual designs that communicate your message effectively.',
    icon: <DesignIcon sx={{ fontSize: 40 }} />,
    color: '#E0A458',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Web Design',
    description: 'Create beautiful, responsive websites that engage your audience and drive business growth.',
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    color: '#2D3047',
    image: 'https://images.unsplash.com/photo-1547658719943-2429e8be8625?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Mobile App Design',
    description: 'Design intuitive and engaging mobile applications that provide seamless user experiences.',
    icon: <MobileIcon sx={{ fontSize: 40 }} />,
    color: '#E0A458',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Architectural Design',
    description: 'Bring your architectural visions to life with our comprehensive design and planning services.',
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    color: '#2D3047',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: '3D Modeling',
    description: 'Create stunning 3D visualizations and models that bring your ideas to life with precision and creativity.',
    icon: <ModelingIcon sx={{ fontSize: 40 }} />,
    color: '#E0A458',
    image: 'https://blog.duolingo.com/content/images/2023/01/02_modelTurntable-1.gif'
  },
  {
    title: 'Art Direction',
    description: 'Guide your creative vision with our comprehensive art direction services.',
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    color: '#2D3047',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=60'
  },
  {
    title: 'Color Consulting',
    description: 'Create the perfect color palette for your space or brand with our expert color consultation.',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    color: '#E0A458',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=60'
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          backdropFilter: 'blur(8px)',
          background: 'rgba(45, 48, 71, 0.8)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src="/src/assets/clear aestetics logo.png"
            alt="Clear Aestetic Designs Logo"
            sx={{
              height: { xs: 40, md: 50 },
              width: 'auto',
              cursor: 'pointer',
              filter: 'brightness(1.2) drop-shadow(0px 0px 8px rgba(224, 164, 88, 0.5))'
            }}
          />
          
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Typography 
                variant="body1" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                sx={{ 
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#E0A458',
                    transition: 'color 0.3s ease'
                  }
                }}
              >
                Home
              </Typography>
              <Typography 
                variant="body1" 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ 
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#E0A458',
                    transition: 'color 0.3s ease'
                  }
                }}
              >
                Services
              </Typography>
              <Typography 
                variant="body1" 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ 
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#E0A458',
                    transition: 'color 0.3s ease'
                  }
                }}
              >
                Contact
              </Typography>
            </Box>
          )}
          
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #2D3047 0%, #1a1b2e 100%)',
            color: 'white'
          }
        }}
      >
        <List sx={{ width: 250, pt: 2 }}>
          <ListItem onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
            <ListItemText 
              primary="Home" 
              sx={{ 
                '& .MuiTypography-root': { 
                  color: 'white',
                  fontFamily: 'Playfair Display, serif'
                }
              }} 
            />
          </ListItem>
          <ListItem onClick={() => { 
            const servicesSection = document.getElementById('services');
            servicesSection?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            <ListItemText 
              primary="Services" 
              sx={{ 
                '& .MuiTypography-root': { 
                  color: 'white',
                  fontFamily: 'Playfair Display, serif'
                }
              }} 
            />
          </ListItem>
          <ListItem onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}>
            <ListItemText 
              primary="Contact" 
              sx={{ 
                '& .MuiTypography-root': { 
                  color: 'white',
                  fontFamily: 'Playfair Display, serif'
                }
              }} 
            />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 8, sm: 9 } }}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, #2D3047 0%, #1a1b2e 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(224, 164, 88, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }
        }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                <Fade in timeout={1000}>
                  <Box>
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        mb: 3,
                        fontFamily: 'Playfair Display, serif',
                        background: 'linear-gradient(45deg, #ffffff 30%, #E0A458 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      Transform Your Space with Elegance
                    </Typography>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 4,
                        fontWeight: 400,
                        opacity: 0.9,
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.02em'
                      }}
                    >
                      We create stunning interior designs that reflect your unique style and enhance your living experience.
                    </Typography>
                  </Box>
                </Fade>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                <Zoom in timeout={1000}>
                  <Box 
                    component="img"
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60"
                    alt="Luxury Interior Design"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)'
                      }
                    }}
                  />
                </Zoom>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="services">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(45deg, #2D3047 30%, #E0A458 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }} 
          >
            We offer a comprehensive range of design services to help your space and brand stand out
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {services.map((service, index) => (
              <Box 
                key={service.title}
                sx={{ 
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(33.333% - 24px)' },
                  minWidth: 0
                }}
              >
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover'
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Box 
                        sx={{ 
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: service.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: 'white'
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Box>
            ))}
          </Box>
        </Container>

        <Box sx={{ 
          background: 'linear-gradient(135deg, #2D3047 0%, #1a1b2e 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(224, 164, 88, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }
        }} id="contact">
          <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 32px)' } }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(45deg, #ffffff 30%, #E0A458 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  About Us
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  We are a team of passionate designers dedicated to creating beautiful and functional spaces that inspire. Our approach combines creativity with technical expertise to deliver exceptional results.
                </Typography>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 32px)' } }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(45deg, #ffffff 30%, #E0A458 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Contact
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  Email: clearaestetic@gmail.com<br />
                  Phone: +2519-68-68-21-86<br />
                  Address: Addis Ababa, Ethiopia
                </Typography>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 32px)' } }}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(45deg, #ffffff 30%, #E0A458 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                    href="https://www.facebook.com/profile.php?id=61577089962988"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <PinterestIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default App
