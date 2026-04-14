'use client';

import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Flex,
} from '@mantine/core';

import {
  IconScale,
  IconBuildingBank,
  IconFileText,
  IconHome,
} from '@tabler/icons-react';

export default function PracticeAreas() {
  return (
    <Box
      id="practiceareas"
      style={{
        padding: '100px 0',
        backgroundImage: "url('/practicebackground.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* 🔥 Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
        }}
      />

      <Container size="lg" style={{ position: 'relative' }}>
        
        {/* 🔥 Heading */}
        <Flex direction="column" align="center" mb={50}>
          
          <Flex align="center" gap={10} mb={10}>
            <Box
              style={{
                width: 40,
                height: 1,
                background: '#c9a14a',
              }}
            />
            
            <IconScale color="#c9a14a" size={47} />
            
            <Box
              style={{
                width: 40,
                height: 1,
                background: '#c9a14a',
              }}
            />
          </Flex>

          <Title
            style={{
              color: '#c9a14a',
              fontSize: 36,
              textAlign: 'center',
            }}
          >
            My Practice Areas
          </Title>

          <Text
            style={{
              color: '#d1d1d1',
              textAlign: 'center',
              marginTop: 10,
              maxWidth: 600,
            }}
          >
            I specialize in a wide range of legal fields to provide expert advice and effective representation.
          </Text>
        </Flex>

        {/* 🔥 Cards */}
        <Grid>
          {[
            {
              icon: <IconScale size={40} />,
              title: 'Criminal Law',
              desc: 'Defense against criminal charges including theft, assault, and other offenses.',
            },
            {
              icon: <IconHome size={40} />,
              title: 'Matrimonial Law',
              desc: 'Handling divorce, child custody, and matrimonial disputes with care and understanding.',
            },
            {
              icon: <IconBuildingBank size={40} />,
              title: 'Civil Law',
              desc: 'Resolving disputes such as property issues, contracts, and personal injury claims.',
            },
            {
              icon: <IconFileText size={40} />,
              title: 'Revenue Law',
              desc: 'Handling land revenue cases, property records, and government-related disputes effectively.',
            },
          ].map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6 }} key={index}>
              <Box
                style={{
                  border: '1px solid rgba(201,161,74,0.4)',
                  borderRadius: 14,
                  padding: 30,
                  textAlign: 'center',
                  transition: '0.3s',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(4px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 40px rgba(201,161,74,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <Flex justify="center" mb={15} style={{ color: '#c9a14a' }}>
                  {item.icon}
                </Flex>

                {/* Title */}
                <Title
                  style={{
                    color: '#c9a14a',
                    fontSize: 24,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Title>

                {/* Desc */}
                <Text
                  style={{
                    color: '#d1d1d1',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}