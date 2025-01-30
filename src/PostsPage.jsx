import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';

export function PostsPage() {
  let posts = [
    {
      id: 1,
      title: "Why is the Sun Yellow?",
      body: "The sun is yellow because it is a big bright star",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwloA0ezkZ8MUt7aMgCFOWw4teaKT1980MA&s",
    },
    {
      id: 2,
      title: "Why Does Night Come After Day?",
      body: "The night comes after day because the earth orbits around the sun and spins every 24 hours",
      image: "https://c02.purpledshub.com/uploads/sites/48/2020/08/Earth-orbit-Sun-7bfd38c.jpg",
    },
    {
      id: 3,
      title: "Why is the Sky Blue?",
      body: "The sky is blue because that's the color that looks the nicest up there",
      image: "https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg",
    }
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
