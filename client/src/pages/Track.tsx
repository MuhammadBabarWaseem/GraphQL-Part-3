import React from 'react'
import { Layout, QueryResult } from "../components";
import TrackDetail from '../components/track-detail';
import{ gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

const GET_TRACK = gql `
query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      id
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
}
    }
}
`

const Track = () => { 
    const {trackId} = useParams()
    const { loading, error, data } = useQuery(GET_TRACK, {
      variables: {
        trackId
      }
    });

    return (
    <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track}/>
      </QueryResult>
    </Layout>
    )
}

export default Track