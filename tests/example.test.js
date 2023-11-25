import { double } from './example';

describe('그룹1', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  afterAll(() => {
    console.log('AfterAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  test('첫 테스트', () => {
    console.log('첫 테스트');
    expect(double(2)).toBe(4);
  });

  test('인수가 숫자 데이터 입니다.', () => {
    console.log('인수가 숫자 데이터 입니다.');
    expect(double(2)).toBe(4);
    expect(double(3)).toBe(6);
    expect(double(4)).toBe(8);
    expect(double(5)).toBe(10);
    expect(double(6)).toBe(12);
  });

  test('인수가 문자열 데이터 입니다.', () => {
    console.log('인수가 문자열 데이터 입니다.');
    expect(double('2')).toBe(4);
    expect(double('3')).toBe(6);
    expect(double('4')).toBe(8);
    expect(double('5')).toBe(10);
    expect(double('6')).toBe(12);
  });

  test('인수가 불리언 데이터 입니다.', () => {
    console.log('인수가 불리언 데이터 입니다.');
    expect(double(true)).toBe(2);
    expect(double(false)).toBe(0);
  });

  test('인수가 객체 데이터 입니다.', () => {
    console.log('인수가 객체 데이터 입니다.');
    expect(double({})).toBe(NaN);
    expect(double({ x: 1 })).toBe(NaN);
    expect(double({ x: 1, y: 2 })).toBe(NaN);
  });

  test('인수가 함수 데이터 입니다.', () => {
    console.log('인수가 함수 데이터 입니다.');
    expect(double(() => {})).toBe(NaN);
    expect(double(() => 1)).toBe(NaN);
    expect(double(() => 2)).toBe(NaN);
  });

  test('인수가 undefined 입니다.', () => {
    console.log('인수가 undefined 입니다.');
    expect(double(undefined)).toBe(NaN);
  });

  test('인수가 null 입니다.', () => {
    console.log('인수가 null 입니다.');
    expect(double(null)).toBe(0);
  });

  test('인수가 없습니다.', () => {
    console.log('인수가 없습니다.');
    expect(double()).toBe(NaN);
  });
});

describe('그룹2', () => {
  test('인수가 숫자 데이터 입니다.', () => {
    console.log('인수가 숫자 데이터 입니다.');
    expect(double(2)).toBe(4);
    expect(double(3)).toBe(6);
    expect(double(4)).toBe(8);
    expect(double(5)).toBe(10);
    expect(double(6)).toBe(12);
  });

  test('인수가 문자열 데이터 입니다.', () => {
    console.log('인수가 문자열 데이터 입니다.');
    expect(double('2')).toBe(4);
    expect(double('3')).toBe(6);
    expect(double('4')).toBe(8);
    expect(double('5')).toBe(10);
    expect(double('6')).toBe(12);
  });

  test('인수가 불리언 데이터 입니다.', () => {
    console.log('인수가 불리언 데이터 입니다.');
    expect(double(true)).toBe(2);
    expect(double(false)).toBe(0);
  });

  test('인수가 객체 데이터 입니다.', () => {
    console.log('인수가 객체 데이터 입니다.');
    expect(double({})).toBe(NaN);
    expect(double({ x: 1 })).toBe(NaN);
    expect(double({ x: 1, y: 2 })).toBe(NaN);
  });

  test('인수가 함수 데이터 입니다.', () => {
    console.log('인수가 함수 데이터 입니다.');
    expect(double(() => {})).toBe(NaN);
    expect(double(() => 1)).toBe(NaN);
    expect(double(() => 2)).toBe(NaN);
  });

  test('인수가 undefined 입니다.', () => {
    console.log('인수가 undefined 입니다.');
    expect(double(undefined)).toBe(NaN);
  });

  test('인수가 null 입니다.', () => {
    console.log('인수가 null 입니다.');
    expect(double(null)).toBe(0);
  });

  test('인수가 없습니다.', () => {
    console.log('인수가 없습니다.');
    expect(double()).toBe(NaN);
  });
});
