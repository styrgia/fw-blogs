import { Faker, ru } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const wait = (ms: number) =>
    new Promise(resolve => {
        setTimeout(resolve, ms);
    });

const DEFAULT_VALUE = 0.5;

export const randomBoolean = () => Math.random() < DEFAULT_VALUE;

export const mockDate = () => new Date().toISOString();

export const randomInt = (min = 1, max = 1_000_000) => Math.floor(Math.random() * (max - min + 1) + min);

export function generateCollection<T extends () => Record<string, unknown>>(
    length: number,
    fn: T
): Array<ReturnType<T> & { id: string }> {
    if (!fn()) {
        throw Error('Mock function: empty generator fn');
    }

    // @todo
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-expect-error */
    return Array.from({ length }, () => ({ id: nanoid(), ...fn() }));
}

export const faker = new Faker({ locale: [ru] });

faker.seed(1234);
