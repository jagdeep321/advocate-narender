'use client';

import {
  Flex,
  Text,
  Anchor,
  Box,
  Burger,
} from '@mantine/core';

import { useState } from 'react';

export default function Navbar() {
  const links = ['Home', 'About', 'Practice Areas',  'Contact'];

  const [active, setActive] = useState('Home');
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* 🔥 NAVBAR */}
      <Box
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: '#0b0b0b',
          borderBottom: '1px solid rgba(201,161,74,0.4)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* ✅ NEW WRAPPER (CENTER FIX) */}
        <Box
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <Flex justify="space-between" align="center" px={20} py={14}>
            
            {/* 🔥 LEFT LOGO */}
            <Flex align="center" gap={8}>
              <Text style={{ color: '#c9a14a', fontSize: 24 }}>⚖</Text>

              <Text
                style={{
                  color: '#c9a14a',
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Advocate Narender Malik
              </Text>
            </Flex>

            {/* 🔥 RIGHT MENU ICON */}
            <Box hiddenFrom="md">
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                color="#c9a14a"
              />
            </Box>

            {/* 🔥 DESKTOP LINKS */}
            <Flex 
              gap={35} 
              visibleFrom="md"
              style={{
                alignItems: 'center',
              }}
            >
              {links.map((link) => {
                const isActive = active === link;

                return (
                  <Box key={link} style={{ position: 'relative' }}>
                    <Anchor
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      underline="never"
                      onClick={() => setActive(link)}
                      style={{
                        color: isActive ? '#c9a14a' : '#e5e5e5',
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      {link}
                    </Anchor>

                    <Box
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: -6,
                        height: 2,
                        width: isActive ? '100%' : 0,
                        background: '#c9a14a',
                        transition: '0.3s',
                      }}
                    />
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* 🔥 MOBILE SIDE MENU */}
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: opened ? 0 : '-100%',
          width: '75%',
          height: '100vh',
          background: '#0b0b0b',
          zIndex: 999,
          transition: '0.4s ease',
          paddingTop: 80,
          borderRight: '1px solid rgba(201,161,74,0.3)',
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ height: '100%' }}
          gap={25}
        >
          {links.map((link) => {
            const isActive = active === link;

            return (
              <Anchor
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                underline="never"
                onClick={() => {
                  setActive(link);
                  setOpened(false);
                }}
                style={{
                  color: isActive ? '#c9a14a' : '#e5e5e5',
                  fontSize: 20,
                  fontWeight: 500,
                  padding: '8px 20px',
                  borderRadius: 6,
                  background: isActive
                    ? 'rgba(201,161,74,0.15)'
                    : 'transparent',
                  transition: '0.3s',
                }}
              >
                {link}
              </Anchor>
            );
          })}
        </Flex>
      </Box>

      {/* 🔥 BACKDROP */}
      {opened && (
        <Box
          onClick={() => setOpened(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}