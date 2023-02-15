import fs from 'fs';

export const getLectures = () => {
  const lectures = fs.readdirSync('./docs/lectures');
  return lectures
    .filter((lecture) => lecture !== 'index.md')
    .map(lecture => lecture.replace('.md', ''));
}