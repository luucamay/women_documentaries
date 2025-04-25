import { filterData, sortData } from '../src/data.js';
import {
  filmsDummyData,
  sortedFilmsByYearReleaseAsc,
  sortedFilmsByYearReleaseDesc,
  sortedFilmsByRatingDesc,
  sortedFilmsByRatingAsc
} from './dummyData.js'

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  /*
  FILTER BY
  year_of_release
  original_language
  genre

  it('returns `filterData`', () => {
    expect(filterData()).toBe('example');
  });*/
});


describe('sortFilms', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `${sortedFilms}` year_of_release ascending', () => {
    expect(sortData(filmsDummyData, 'year_of_release', 'asc')).toEqual(sortedFilmsByYearReleaseAsc);
  });

  it('returns `${sortedFilms}` year_of_release descending', () => {
    expect(sortData(filmsDummyData, 'year_of_release', 'desc')).toEqual(sortedFilmsByYearReleaseDesc);
  });

  it('returns `${sortedFilms}` rating descending', () => {
    expect(sortData(filmsDummyData, 'rating', 'asc')).toEqual(sortedFilmsByRatingAsc);
  });

  it('returns `${sortedFilms}` rating descending', () => {
    expect(sortData(filmsDummyData, 'rating', 'desc')).toEqual(sortedFilmsByRatingDesc);
  });

  /*
  SORT BY
  year_of_release DONE
  PENDING:
  rating
  alphabetically

    it('returns `anotherExample`', () => {
      expect(anotherExample()).toBe('OMG');
    });*/
});