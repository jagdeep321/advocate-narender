'use client';

import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Flex,
  Button,
  TextInput,
  Textarea,
  Divider,
} from '@mantine/core';

import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconScale,
} from '@tabler/icons-react';

import { useState } from 'react';

export default function Contact() {
  const phone = '919896668880';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleWhatsApp = () => {
    const text = `Hello, my name is ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:9896668880`);
  };

  const openWhatsApp = () => {
  window.open('https://wa.me/919896668880', '_blank');
};

const openFacebook = () => {
  window.open(
    'https://www.facebook.com/share/1CNJp3LCcq/',
    '_blank'
  );
};
  return (
    <Box
      id="contact"
      style={{
        padding: '100px 0',
        backgroundImage: "url('/contactbackground.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.88)',
        }}
      />

      <Container size="md" style={{ position: 'relative' }}>
        
        {/* 🔥 Heading */}
        <Flex direction="column" align="center" mb={60}>
          
          <Flex align="center" gap={15}>
            <Box style={{ width: 100, height: 1, background: '#c9a14a' }} />
            
            <IconScale size={26} color="#c9a14a" />
            
            <Box style={{ width: 100, height: 1, background: '#c9a14a' }} />
          </Flex>

          <Title style={{ color: '#c9a14a', marginTop: 10, fontSize:'50px' }}>
            Contact Me
          </Title>

          <Text style={{ color: '#ccc', marginTop:10, fontSize:'24px' }}>Get In Touch</Text>
        </Flex>

        {/* 🔥 GRID */}
        <Grid align="stretch">
          
          {/* 🔥 LEFT CARD */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                height: '100%',
                border: '1px solid rgba(201,161,74,0.5)',
                borderRadius: 12,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Image */}
              <Box
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginBottom: 20,
                }}
              >
                <img
                  src="/scren.png"
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Phone */}
{/* Phone */}
<Flex align="center" gap={12} mb={10}>
  <IconPhone size={20} color="#c9a14a" />
  <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 500 }}>
    +91 9896668880
  </Text>
</Flex>

<Divider my="sm" color="rgba(201,161,74,0.3)" />

{/* Email */}
<Flex align="center" gap={12} mb={10}>
  <IconMail size={20} color="#c9a14a" />
  <Text style={{ color: '#ffffff', fontSize: 16 }}>
   narenderkmalik.adv@gmail.com
  </Text>
</Flex>

<Divider my="sm" color="rgba(201,161,74,0.3)" />

{/* Address */}
<Flex align="flex-start" gap={12}>
  <IconMapPin size={20} color="#c9a14a" />
  <Text
    style={{
      color: '#e0e0e0',
      fontSize: 15,
      lineHeight: 1.6,
    }}
  >
    Chamber No.18, Lawyers Chamber Complex,
    Civil Court Ratia
  </Text>
</Flex>

              <Divider my="sm" color="rgba(201,161,74,0.3)" />

              {/* Call Button */}
              <Button
                onClick={handleCall}
                mt={10}
                style={{
                  background: 'transparent',
                  border: '1px solid #c9a14a',
                  color: '#c9a14a',
                }}
              >
                Call Now
              </Button>
            </Box>
          </Grid.Col>

          {/* 🔥 RIGHT CARD */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                height: '100%',
                border: '1px solid rgba(201,161,74,0.5)',
                borderRadius: 12,
                padding: 20,
              }}
            >
              <Title style={{ color: '#c9a14a', marginBottom: 10 }}>
                Send Me a Message
              </Title>

              <Text style={{ color: '#ccc', marginBottom: 20 }}>
                Fill out the form below and I will get back to you shortly.
              </Text>

              <Flex direction="column" gap={15}>
                
                <TextInput
                  placeholder="Your Name"
                  styles={{
                    input: {
                      background: 'transparent',
                      border: '1px solid rgba(201,161,74,0.4)',
                      color: '#fff',
                    },
                  }}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <TextInput
                  placeholder="Your Email"
                  rightSection={<IconMail size={16} color="#c9a14a" />}
                  styles={{
                    input: {
                      background: 'transparent',
                      border: '1px solid rgba(201,161,74,0.4)',
                      color: '#fff',
                    },
                  }}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <TextInput
                  placeholder="Your Phone"
                  rightSection={<IconPhone size={16} color="#c9a14a" />}
                  styles={{
                    input: {
                      background: 'transparent',
                      border: '1px solid rgba(201,161,74,0.4)',
                      color: '#fff',
                    },
                  }}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <Textarea
                  placeholder="Message"
                  minRows={4}
                  styles={{
                    input: {
                      background: 'transparent',
                      border: '1px solid rgba(201,161,74,0.4)',
                      color: '#fff',
                    },
                  }}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <Button
                  onClick={handleWhatsApp}
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #c9a14a)',
                    color: '#000',
                    fontWeight: 600,
                  }}
                >
                  Send Message
                </Button>
              </Flex>

              {/* Social */}
            <Flex justify="center" mt={20} gap={15}>
  
  {/* WhatsApp */}
  <Box
    style={{
      width: 45,
      height: 45,
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: '0.3s',
    }}
    onClick={openWhatsApp}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    <IconBrandWhatsapp color="#fff" size={22} />
  </Box>

  {/* Facebook */}
  <Box
    style={{
      width: 45,
      height: 45,
      borderRadius: '50%',
      background: '#1877F2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: '0.3s',
    }}
    onClick={openFacebook}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    <IconBrandFacebook color="#fff" size={22} />
  </Box>

</Flex>
            </Box>
          </Grid.Col>
        </Grid>

        {/* 🔥 Bottom Line + Icon */}
        <Flex align="center" mt={60} gap={15}>
          <Box style={{ flex: 1, height: 1, background: '#c9a14a' }} />
          <IconScale color="#c9a14a" />
          <Box style={{ flex: 1, height: 1, background: '#c9a14a' }} />
        </Flex>

      </Container>
    </Box>
  );
}