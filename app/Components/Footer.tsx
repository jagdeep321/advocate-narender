'use client';

import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Flex,
  Anchor,
} from '@mantine/core';

import {
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconPhone,
  IconMapPin,
} from '@tabler/icons-react';

export default function Footer() {
  const openWhatsApp = () => {
    window.open('https://wa.me/919463182321', '_blank');
  };

  const openFacebook = () => {
    window.open(
      'https://www.facebook.com/share/1CNJp3LCcq/',
      '_blank'
    );
  };

  return (
    <Box
      style={{
        background: '#0c0c0c',
        paddingTop: 60,
        borderTop: '1px solid rgba(201,161,74,0.3)',
      }}
    >
      <Container size="lg">
        
        <Grid>
          
          {/* 🔥 LEFT - BRAND */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Flex align="center" gap={10} mb={15}>
              <Text style={{ color: '#c9a14a', fontSize: 26 }}>⚖</Text>
              <Title style={{ color: '#c9a14a', fontSize: 20 }}>
                Advocate Narender Malik
              </Title>
            </Flex>

            <Text style={{ color: '#ccc', lineHeight: 1.7 }}>
              Providing trusted legal solutions with professionalism and
              integrity. Dedicated to protecting your rights and
              delivering justice.
            </Text>
          </Grid.Col>

          {/* 🔥 MIDDLE - LINKS */}
          <Grid.Col span={{ base: 6, md: 4 }}>
            <Title style={{ color: '#c9a14a', fontSize: 18 }} mb={15}>
              Quick Links
            </Title>

            <Flex direction="column" gap={10}>
              {['home', 'about', 'practice', 'contact'].map((link) => (
                <Anchor
                  key={link}
                  href={`#${link}`}
                  underline="never"
                  style={{
                    color: '#ccc',
                    transition: '0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#c9a14a';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ccc';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Anchor>
              ))}
            </Flex>
          </Grid.Col>

          {/* 🔥 RIGHT - CONTACT */}
          <Grid.Col span={{ base: 6, md: 4 }}>
            <Title style={{ color: '#c9a14a', fontSize: 18 }} mb={15}>
              Contact Info
            </Title>

            <Flex direction="column" gap={12}>
              
              <Flex gap={10}>
                <IconPhone size={18} color="#c9a14a" />
                <Text style={{ color: '#ccc' }}>+91 9463182321</Text>
              </Flex>

              <Flex gap={10}>
                <IconMapPin size={18} color="#c9a14a" />
                <Text style={{ color: '#ccc' }}>
                  Chamber No.18, Civil Court Ratia
                </Text>
              </Flex>
            </Flex>

            {/* 🔥 Social Icons */}
            <Flex mt={20} gap={12}>
              
              <Box
                onClick={openWhatsApp}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <IconBrandWhatsapp color="#fff" size={20} />
              </Box>

              <Box
                onClick={openFacebook}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <IconBrandFacebook color="#fff" size={20} />
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>

        {/* 🔥 Divider */}
        <Box
          style={{
            height: 1,
            background: 'rgba(201,161,74,0.3)',
            margin: '40px 0 20px',
          }}
        />

        {/* 🔥 Bottom */}
        <Flex justify="space-between" align="center" wrap="wrap">
          <Text style={{ color: '#888', fontSize: 14 }}>
            © {new Date().getFullYear()} Advocate Narender Malik. All rights reserved.
          </Text>

          <Text style={{ color: '#888', fontSize: 14 }}>
            Designed with ❤️
          </Text>
        </Flex>

      </Container>
    </Box>
  );
}