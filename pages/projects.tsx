import Main from "@/components/Main";
import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";
import data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Head from "@/components/Head";
const projects = () => {
  return (
    <Main>
      <Head title="Projects" description="Some collection of my past works." />
      <Heading mt={[4, 6]}>Projects</Heading>
      <Text>Some collection of my past works.</Text>
      <Stack w="full" spacing={[6, 4]}>
        {data.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </Stack>
    </Main>
  );
};

export default projects;