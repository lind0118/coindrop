import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Icon, Box, useClipboard, Text, Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, ModalFooter } from '@chakra-ui/core';
import { PublicPiggybankData } from './PublicPiggybankDataContext';

const PaymentMethodButtonModal = (props) => {
    const { isOpen, onClose, paymentMethod, paymentMethodDisplayName, paymentMethodValue } = props;
    const { onCopy, hasCopied } = useClipboard(paymentMethodValue);
    const { user_display_name: userDisplayName } = useContext(PublicPiggybankData);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader
                textAlign="center"
                mt={3}
                mx="auto"
            >
                {userDisplayName}
                {"'s "}
                {paymentMethodDisplayName}
                {' address'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
                pt={0}
                mb={3}
                mx="auto"
            >
                <Flex align="center">
                    <Icon
                        mr={2}
                        name={paymentMethod}
                        size="48px"
                    />
                    <Text
                        wordBreak="break-all"
                        textAlign="center"
                    >
                        {paymentMethodValue}
                    </Text>
                </Flex>
                <Box
                    my={2}
                    textAlign="center"
                >
                    <Button
                        leftIcon={hasCopied ? "check" : "copy"}
                        onClick={onCopy}
                    >
                        {hasCopied ? "Copied" : "Copy"}
                    </Button>
                </Box>
            </ModalBody>
            </ModalContent>
        </Modal>
    );
};

PaymentMethodButtonModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    paymentMethod: PropTypes.string.isRequired,
    paymentMethodDisplayName: PropTypes.string.isRequired,
    paymentMethodValue: PropTypes.string.isRequired,
};

PaymentMethodButtonModal.defaultProps = {

};

export default PaymentMethodButtonModal;
