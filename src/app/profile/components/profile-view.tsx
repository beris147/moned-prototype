import React from 'react';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { redirect } from 'next/navigation';

const query = graphql(`
	query UserProfile($id: UUID) {
		patientCollection(filter: { id: { eq: $id } }) {
			edges {
				patient: node {
					full_name
					email
				}
			}
		}
	}
`);

export default async function ProfileView({ userID }: { userID: string }) {
	const client = await getSSRClient();
	const { data, loading, error } = await client.query({
		query,
		variables: {
			id: userID,
		},
	});
	if (loading) {
		return <>Loading...</>;
	}
	if (error) {
		redirect('/error');
	}
	const patient = data.patientCollection?.edges.at(0)?.patient;
	return (
		<>
			Profile for: {patient?.email} - Name: {patient?.full_name}
		</>
	);
}
