import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Layout, ModuleDetail, QueryResult } from '../components';

const GET_MODULE = gql`
  query GetModuleTrackForModulePage($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

export const Module = () => {
  const { moduleId, trackId } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE, {
    variables: { moduleId, trackId },
  });

  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout>
        <ModuleDetail module={data?.module} track={data?.track} />
      </Layout>
    </QueryResult>
  );
};
