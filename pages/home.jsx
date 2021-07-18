import React from 'react';
import Footer from 'components/Footer';
import LessonSection from 'components/LessonSection';
import StatsHeader from 'components/StatsHeader';
import { Container } from '@chakra-ui/react';
import RippleButton from 'components/RippleButton';
import Navbar from 'components/Navbar';
import styles from './Home.module.scss';

const home = (props) => {
	return (
		<div
			className={styles.container}
			style={{
				height: '100%',
			}}
		>
			<Navbar />
			<StatsHeader />
			<LessonSection></LessonSection>
			{/* <Footer /> */}
		</div>
	);
};

export default home;
