'use client';

import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  Title,
  Flex,
  Button,
} from '@mantine/core';

import { IconBriefcase, IconGavel, IconUsers, IconScale } from '@tabler/icons-react';

export default function About() {
  const phone = '9463182321';

  const handleCall = () => {
    window.open(`tel:${phone}`);
  };

  return (
    <Box
      id="about"
      style={{
        padding: '100px 0',
        background: '#0b0b0b', // 🔥 solid theme
        color: 'white',
      }}
    >
      <Container size="lg">
        <Grid align="stretch">
          
          {/* 🔥 LEFT IMAGE */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box
              style={{
                position: 'relative',
                height: '100%',
              }}
            >
              <Image
                src="/narender.jpeg"
                alt="Advocate"
                style={{
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Golden Border */}
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid #c9a14a',
                  borderRadius: 12,
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Grid.Col>

          {/* 🔥 RIGHT CONTENT */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            
            <Box style={{ paddingLeft: 20 }}>
              
              {/* Tag */}
              <Flex align="center" gap={8} mb={10}>
                <Box
                  style={{
                    width: 8,
                    height: 8,
                    background: '#c9a14a',
                    borderRadius: '50%',
                  }}
                />
                <Text style={{ color: '#c9a14a', fontSize: 14 }}>
                  ABOUT ME
                </Text>
              </Flex>

              {/* Title */}
              <Title style={{ fontSize: 44, lineHeight: 1.3 }}>
                Professional &{' '}
                <span style={{ color: '#c9a14a' }}>Experienced</span> Lawyer
              </Title>

              {/* Line */}
              <Box
                style={{
                  width: 60,
                  height: 2,
                  background: '#c9a14a',
                  margin: '20px 0',
                }}
              />

              {/* Description */}
              <Text
                style={{
                  color: '#cfcfcf',
                  lineHeight: 1.8,
                  marginBottom: 30,
                }}
              >
                I am a dedicated advocate with over 10+ years of experience in
                handling civil, criminal, and corporate cases. My mission is to
                provide effective legal solutions and protect my clients' rights.
              </Text>

              {/* 🔥 STATS */}
              <Grid>
                {[
                  {
                    icon: <IconBriefcase size={26} />,
                    value: '10+',
                    label: 'Years Experience',
                  },
                  {
                    icon: <IconGavel size={26} />,
                    value: '500+',
                    label: 'Cases Won',
                  },
                  {
                    icon: <IconUsers size={26} />,
                    value: '300+',
                    label: 'Happy Clients',
                  },
                ].map((item, index) => (
                  <Grid.Col span={4} key={index}>
                    <Box
                      style={{
                        border: '1px solid rgba(201,161,74,0.4)',
                        borderRadius: 10,
                        padding: 20,
                        textAlign: 'center',
                        transition: '0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* ICON TOP CENTER */}
                      <Flex justify="center" mb={10} style={{ color: '#c9a14a' }}>
                        {item.icon}
                      </Flex>

                      <Title style={{ color: '#c9a14a', fontSize: 26 }}>
                        {item.value}
                      </Title>

                      <Text style={{ color: '#ccc', fontSize: 14 }}>
                        {item.label}
                      </Text>
                    </Box>
                  </Grid.Col>
                ))}
              </Grid>

              {/* 🔥 BUTTON + LINE + SCALE */}
              <Flex align="center" mt={40} gap={20}>
                
                <Button
                  onClick={handleCall}
                  size="lg"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #c9a14a)',
                    color: '#000',
                    fontWeight: 600,
                    padding: '12px 30px',
                    transition: '0.3s',
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
                  Contact Me →
                </Button>

                {/* LINE */}
                <Box
                  style={{
                    flex: 1,
                    height: 1,
                    background: 'rgba(201,161,74,0.4)',
                  }}
                />

                {/* SCALE ICON */}
                <IconScale size={30} color="#c9a14a" />
              </Flex>

            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}