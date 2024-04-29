// Music Player Page Component with Bitcoin Algorithm Inspired Sound Equalizer
import { Box, Button, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  // Dummy function to simulate sound equalizer effect inspired by Bitcoin algorithm
  const applyBitcoinAlgorithm = (value) => {
    // This would be a complex algorithm in a real scenario
    return value * 0.618; // Example using the golden ratio
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(applyBitcoinAlgorithm(value));
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh" bg="gray.900" color="white">
      <Text fontSize="2xl" fontWeight="bold">
        Bitcoin Beats
      </Text>
      <Image src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwbXVzaWMlMjBwbGF5ZXJ8ZW58MHx8fHwxNzE0NDA3NTY2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
      <Box>
        <Button onClick={handlePlayPause} size="lg" colorScheme="yellow" leftIcon={isPlaying ? <FaPause /> : <FaPlay />}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button size="lg" colorScheme="gray" ml={2} leftIcon={<FaBackward />}>
          Prev
        </Button>
        <Button size="lg" colorScheme="gray" ml={2} rightIcon={<FaForward />}>
          Next
        </Button>
      </Box>
      <Box width="50%">
        <Text mb={2}>Volume: {Math.round(volume)}%</Text>
        <Slider aria-label="volume-slider" defaultValue={50} min={0} max={100} colorScheme="yellow" onChange={handleVolumeChange}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  );
};

export default Index;
