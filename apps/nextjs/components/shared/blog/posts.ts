import { faker, generateCollection, randomInt } from '~/lib/utils/mocks';

export type Post = {
    id: string;
    title: string;
    description: string;
    image: string;
    author: {
        name: string;
        surname: string;
    };
    date: Date;
    text: string;
};

export const posts: Post[] = generateCollection(100, () => ({
    id: faker.string.uuid(),
    image: `/images/blog/blog-0${randomInt(1, 5)}.png`,
    title: faker.lorem.sentence({ min: 3, max: 5 }),
    description: faker.lorem.sentence(5),
    author: {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
    },
    date: faker.date.anytime(),
    text: faker.lorem.text(),
}));
