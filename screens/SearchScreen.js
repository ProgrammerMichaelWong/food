import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

export default (props) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filteredResults = (price) =>
    results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        submitTerm={() => searchApi(term)}
      />
      <Text>{term}</Text>
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultList results={filteredResults('$')} title="Cost Effective" />
        <ResultList results={filteredResults('$$')} title="Bit Pricer" />
        <ResultList results={filteredResults('$$$')} title="Big Spender!" />
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({});
