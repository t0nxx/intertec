import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import './footer.scss';
import { Navbar, Image, ProgressBar, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { StateSelectorInterface } from '../../../redux/reducers/helper';
import InfoComponent from '../../molecules/sticky-info/sticky-info';

// Import images
import applicationIc from '../../../assets/applicationIc.svg';
import attachmentIc from '../../../assets/attachmentIc.svg';
import attachmentIcGreen from '../../../assets/attachmentIcGreen.svg';
import previewIc from '../../../assets/previewIc.svg';
import previewIcGreen from '../../../assets/previewIcGreen.svg';
import paymentIc from '../../../assets/paymentIc.svg';
import paymentIcGreen from '../../../assets/paymentIcGreen.svg';

import back from '../../../assets/back.svg';

export default function FooterComponent() {
	const { t } = useTranslation();
	const history = useHistory();
	const location = useLocation();
	const newLicense =
		location.pathname === '/new-license-pharmaceutical-establishment';
	const isInAttachPage =
		location.pathname ===
		'/new-license-pharmaceutical-establishment/attachment';
	const isInPreviewPage =
		location.pathname === '/new-license-pharmaceutical-establishment/review';

	const isInPaymentPage =
		location.pathname === '/relocation-license-pharmaceutical/payment';
	const relocationLicense =
		location.pathname === '/relocation-license-pharmaceutical';

	// console.log('isInPaymentPage', isInPaymentPage);
	// console.log('relocationLicense', relocationLicense);

	// progress bar state
	const progressPersentage = useSelector(
		(s: StateSelectorInterface) => s.footerReducer.progressBarPersentage
	);
	// sticky info description and fees
	const {
		showFooter,
		showBackButton,
		showStickyInfo,
		stickyInfoDescription,
		stickyInfoFees,
		customFooterContent,
	} = useSelector((s: StateSelectorInterface) => s.footerReducer);

	return (
		<Navbar expand="lg" fixed="bottom" className="footer" hidden={!showFooter}>
			<div className="flagIc"> </div>
			<InfoComponent
				description={stickyInfoDescription}
				fees={stickyInfoFees}
				shown={showStickyInfo}
			/>
			<div className="stickyBack" hidden={!showBackButton}>
				<Image src={back} onClick={() => history.goBack()} />
			</div>

			{/* this content should be dynamic */}
			<ProgressBar
				variant="success"
				now={progressPersentage}
				className="progress"
			/>
			<Row className="statistics-container">
				{/* <div>
          <Image src={applicationIc} />
          <span className="active">{t("Titles.Application form")}</span>
        </div>
        <div>
          <Image src={attachmentIc} />
          <span> {t("Titles.Attachment")}</span>
        </div>
        <div>
          <Image src={previewIc} />
          <span>  {t("Titles.Preview")}</span>
        </div>
        <div className="complete">
          <span> {t("Titles.Complete progress")}</span>
          <strong>{progressPersentage} %</strong>
        </div> */}

				<Col xs={2} className="hideOnTaplet">
					<Row xs={12} sm={12}>
						<Col className="image1 prog">
							<p>{t('Titles.Complete progress')}</p>
							<span>{progressPersentage} %</span>
						</Col>
					</Row>
				</Col>

				<Col xs={10} className="attachments">
					<Row>
						<Col xs={4}>
							<Row xs={12} sm={4}>
								<Col className="image1">
									<Image src={applicationIc} />
								</Col>
								<Col xs={12} sm={8}>
									<span className="active">{t('Titles.Application form')}</span>
								</Col>
							</Row>
						</Col>
						{newLicense || isInAttachPage || isInPreviewPage ? (
							<React.Fragment>
								<Col xs={4}>
									<Row>
										<Col xs={12} sm={4}>
											<Image
												src={
													isInAttachPage || isInPreviewPage
														? attachmentIcGreen
														: attachmentIc
												}
											/>
										</Col>
										<Col xs={12} sm={8}>
											<span> {t('Titles.Attachment')}</span>
										</Col>
									</Row>
								</Col>

								<Col xs={4}>
									<Row>
										<Col xs={12} sm={4}>
											<Image
												src={isInPreviewPage ? previewIcGreen : previewIc}
											/>
										</Col>
										<Col xs={12} sm={8}>
											<span> {t('Titles.Preview')}</span>
										</Col>
									</Row>
								</Col>
							</React.Fragment>
						) : null}

						{relocationLicense || isInPaymentPage ? (
							<Col xs={4}>
								<Row>
									<Col xs={12} sm={4}>
										<Image src={isInPaymentPage ? paymentIcGreen : paymentIc} />
									</Col>
									<Col xs={12} sm={8}>
										<span> {t('Titles.Payment')}</span>
									</Col>
								</Row>
							</Col>
						) : null}
					</Row>
				</Col>
			</Row>
		</Navbar>
	);
}
