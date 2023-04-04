import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Layout, QueryResult, TrackDetail } from '../components';

const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      decription
      numberOfViews
      modules {
        id
        title
        length
      }
      author {
        id
        name
        photo
      }
    }
  }
`;

export const Track = () => {
  const { trackId } = useParams();
  console.log('trackId', trackId);
  const { error, loading, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <QueryResult error={error} data={data} loading={loading}>
      <Layout>
        <TrackDetail track={data?.track} />
      </Layout>
    </QueryResult>
  );
};
