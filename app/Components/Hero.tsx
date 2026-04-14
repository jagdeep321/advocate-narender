'use client';

import { Box, Title, Text, Button, Flex } from '@mantine/core';

export default function Hero() {
  const phone = '919463182321';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <Box
      id="home"
      style={{
        height: '100vh',
        backgroundImage: "url('/advocatehome.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* 🔥 Dark Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
        }}
      />

      {/* 🔥 Content */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{
          position: 'relative',
          height: '100%',
          textAlign: 'center',
          color: 'white',
          padding: '0 20px',
        }}
      >
        {/* 🔥 Title */}
        <Title
          style={{
            fontSize: 64,
            fontWeight: 500,
            marginBottom: 15,
            letterSpacing: 1,
          }}
        >
          Experienced Legal Solutions
        </Title>

        {/* 🔥 Subtitle */}
        <Text
          style={{
            fontSize: 18,
            color: '#d1d1d1',
            marginBottom: 15,
          }}
        >
          Providing expert legal advice and representation for over 10+ years.
        </Text>

        {/* 🔥 Golden Line */}
        <Box
          style={{
            width: 80,
            height: 2,
            background: '#c9a14a',
            marginBottom: 30,
          }}
        />

        {/* 🔥 Button */}
        <Button
          onClick={handleWhatsApp}
          size="lg"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #c9a14a)',
            color: '#000',
            fontWeight: 600,
            padding: '12px 32px',
            fontSize: 16,
            borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow =
              '0 10px 25px rgba(201,161,74,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Book Consultation
        </Button>
      </Flex>
    </Box>
  );
}