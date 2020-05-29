import React from 'react'
import styled from 'styled-components'

import Wrapper from 'components/Layout/Wrapper'
import { PrimarySectionTitle } from 'components/Misc/SectionTitle'
import ContainedImage from 'components/Images/ContainedImage'

import Logo from 'assets/kojo-primary-logo.svg'

const AboutMain = styled.main`
	padding-top: 8vh;
	min-height: 80vh;
`

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;

	align-items: center;

	.about-logo {
		padding: 5%;
	}

	.about-paragraph {
		text-align: center;

		P {
			margin-bottom: 3vh;
			font-size: ${({ theme }) => theme.fontSize.regular};
			color: ${({ theme }) => theme.colors.font};
		}
	}
`

export default function About() {
	return (
		<AboutMain>
			<Wrapper>
				<AboutContainer>
					<div className="about-logo">
						<ContainedImage src={Logo} alt="Kojo Cloth Logo" width="148px" />
					</div>
					<PrimarySectionTitle>Tentang Kami</PrimarySectionTitle>
					<div className="about-paragraph">
						<p>
							Permasalahan yang sering dialami oleh para konsumen pada saat
							memesan untuk membuat pakaian bagi komunitas/kelompoknya yaitu
							kurang atau bahkan tidak adanya edukasi terkait bahan, harga dan
							proses produksi, sehingga sering kali produk yang dibuat oleh
							penyedia jasa konfeksi tidak sesuai dengan apa yang diharapkan.
						</p>
						<p>
							KOJO.CLOTH hadir untuk memenuhi kebutuhan sandang pribadi,
							organisasi atau komunitas seperti Jaket, Jas, Kaos, Kemeja, Rompi,
							Toga, Tas Jinjing (Tote Bag) dll. dengan memberikan edukasi
							terlebih dahulu terkait pesanan yang akan dibuat mulai dari bahan,
							harga hingga proses produksi, serta memiliki program sosial dengan
							memberdayakan masyarakat di daerah Bandung Timur dan sekitarnya
							yang belum memiliki pekerjaan melalui pelatihan menjahit gratis
							sehingga orang yang bersangkutan memiliki keahlian yang kemudian
							dapat ia gunakan untuk mensejahterakan diri dan keluarganya.
						</p>
						<p>
							Berdiri sejak 28 November 2018, KOJO.CLOTH telah mengerjakan
							berbagai pesanan mulai dari skala kecil berjumlah 12 pcs hingga
							skala besar mencapai 1400 pcs Jas Almamater STIE Pelita Bangsa
							Bekasi. Selain mengerjakan pesanan dari dalam kota dan wilayah
							Jawa Barat, KOJO.CLOTH juga seringkali menerima dan mengerjakan
							pesanan dari luar pulau Jawa.
						</p>
						<p>
							Quality control serta pelayanan prima menjadi prioritas bagi
							KOJO.CLOTH agar dapat memberikan produk sandang dengan hasil yang
							memuaskan Baraya Kojo (Konsumen).
						</p>
					</div>
				</AboutContainer>
			</Wrapper>
		</AboutMain>
	)
}
