import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, CardMedia, Paper, Link } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ApiIcon from '@mui/icons-material/Api';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CountUp from 'react-countup';

import cliente1 from './imgs/cliente1.png';
import cliente2 from './imgs/cliente2.png';
import cliente3 from './imgs/cliente3.png';
import cliente4 from './imgs/cliente4.png';
import cliente5 from './imgs/cliente5.png';
import cliente6 from './imgs/cliente6.png';
import antesCarro from './imgs/antes-carro.jpg';
import depoisCarro from './imgs/depois-carro.png';
import antesCasa from './imgs/antes-casa.jpg';
import depoisCasa from './imgs/depois-casa.png';
import antesSapato from './imgs/sapato-antes.jpg';
import depoisSapato from './imgs/sapato-depois.png';

const navItems = ['A Solução', 'Resultados', 'Sobre'];
const featureIcons = [
  <ApiIcon sx={{ fontSize: 60 }} color="primary" />,
  <AutoAwesomeIcon sx={{ fontSize: 60 }} color="primary" />,
  <RocketLaunchIcon sx={{ fontSize: 60 }} color="primary" />,
];
const carouselItems = [
  {
    left: antesCarro,
    right: depoisCarro,
  },
  {
    left: antesCasa,
    right: depoisCasa,
  },
  {
    left: antesSapato,
    right: depoisSapato,
  },
];
const clientLogos = [
  { name: 'Magalu', url: cliente1 },
  { name: 'Amazon', url: cliente2 },
  { name: 'Mercado Livre', url: cliente3 },
  { name: 'OLX', url: cliente4 },
  { name: 'Webmotors', url: cliente5 },
  { name: 'Enjoei', url: cliente6 },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0}
      sx={{
        backgroundColor: isScrolled ? '#1A2027' : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          ULTRA FOCO
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff', textTransform: 'none', fontSize: '1rem' }}>
              {item}
            </Button>
          ))}
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Demonstração
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box>
      <Navbar />
      {/* Hero Section with Parallax Background */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1660211983492-9df0c82ba9ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md" sx={{ color: 'white' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Aumente suas Vendas com Imagens Ultra Focadas por IA.
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            A tecnologia que transforma fotos comuns em ativos visuais de alta conversão para o seu marketplace.
          </Typography>
          <Button variant="contained" size="large" color="primary">
            Solicitar Demonstração Gratuita
          </Button>
        </Container>
      </Box>

      {/* Proof of Concept Section with Swiper */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#1A2027',
          color: 'white',
          '.swiper-button-next, .swiper-button-prev': {
            color: 'primary.main',
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: 'primary.main',
          },
        }}
        data-aos="fade-up"
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            O Fim das Imagens Ruins
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Arraste e veja a transformação. Nossa IA analisa e aprimora cada detalhe para você.
          </Typography>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={5}>
                    <Card sx={{ backgroundColor: '#333' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={item.left}
                        alt="Imagem antes da otimização"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" color="white">
                          Imagem Padrão
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Card sx={{ backgroundColor: '#333' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={item.right}
                        alt="Imagem otimizada"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center" color="white">
                          Imagem Ultra Foco
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 8, backgroundColor: '#fff', color: '#1A2027' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Tecnologia Visual de Alta Performance
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 8 }}>
            Nosso processo é simples, rápido e desenhado para escalar com o seu negócio.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[...Array(3)].map((_, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{featureIcons[index]}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {['1. Integração Rápida', '2. Processamento com IA', '3. Entrega Otimizada'][index]}
                  </Typography>
                  <Typography>
                    {[
                      'Conecte seu sistema à nossa API em poucas horas, sem complicação.',
                      'Nossa IA analisa, corrige e aprimora milhões de imagens automaticamente.',
                      'Receba as imagens otimizadas e prontas para aumentar sua conversão.',
                    ][index]}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Results Section */}
      <Box sx={{ py: 8, backgroundColor: '#1A2027', color: 'white' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Otimização Visual = Conversão Máxima
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }} textAlign="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h2" component="p" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                <CountUp end={35} duration={3} prefix="+" suffix="%" enableScrollSpy />
              </Typography>
              <Typography variant="h6">Aumento no CTR</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h2" component="p" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                <CountUp end={50} duration={3} prefix="-" suffix="%" enableScrollSpy />
              </Typography>
              <Typography variant="h6">Taxa de Devolução</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h2" component="p" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                <CountUp end={20} duration={3} prefix="+" suffix="%" enableScrollSpy />
              </Typography>
              <Typography variant="h6">Engajamento do Cliente</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, backgroundColor: '#fff' }} data-aos="fade-up">
        <Container maxWidth="md">
          <Box sx={{ borderLeft: 4, borderColor: 'primary.main', pl: 4 }}>
            <Typography variant="h4" component="p" sx={{ fontStyle: 'italic', color: 'grey.700' }}>
              "Nossa missão é capacitar o futuro do e-commerce com a mais alta fidelidade visual, transformando cada imagem em uma oportunidade de conversão."
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Clients Section */}
      <Box sx={{ py: 8, backgroundColor: '#1A2027', color: 'white' }} data-aos="fade-up">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Grandes Marcas que Confiam na Ultra Foco
          </Typography>
          <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
            {clientLogos.map((client, index) => (
              <Grid item key={index} xs={6} sm={4} md={2} sx={{ textAlign: 'center' }}>
                <img
                  src={client.url}
                  alt={client.name}
                  style={{
                    width: '100%',
                    height: '70px',
                    objectFit: 'contain',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: '#101418', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>ULTRA FOCO</Typography>
              <Typography variant="body2" color="text.secondary">
                A tecnologia que transforma fotos comuns em ativos visuais de alta conversão.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Links Úteis</Typography>
              <Link href="#" color="inherit" display="block">A Solução</Link>
              <Link href="#" color="inherit" display="block">Resultados</Link>
              <Link href="#" color="inherit" display="block">Sobre</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Suporte</Typography>
              <Link href="#" color="inherit" display="block">Fale Conosco</Link>
              <Link href="#" color="inherit" display="block">Documentação API</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>Redes Sociais</Typography>
              <Link href="#" color="inherit" display="block">LinkedIn</Link>
              <Link href="#" color="inherit" display="block">Twitter</Link>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6, pt: 3, borderTop: 1, borderColor: 'grey.800' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Ultra Foco. Todos os direitos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
