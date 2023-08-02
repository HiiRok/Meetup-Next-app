import MeetupList from '@/components/meetups/MeetupList';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { MongoClient} from 'mongodb';


const HomePage = (props) => {
  return (
    <Fragment>
        <Head>
            <title>MeetUps</title>
            <meta name='description'
                  content='Browse a huge list of highly active React meetups'
            />
        </Head>
        <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/meetups');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;