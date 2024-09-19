import PropTypes from 'prop-types';
import { useDisclosure, Icon, Text, Flex, useTheme, PseudoBox } from '@chakra-ui/core';
import { paymentMethodNames } from '../../src/paymentMethods';
import PaymentMethodButtonModal from './PaymentMethodButtonModal';

const PaymentMethodButton = (props) => {
    const theme = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { paymentMethod, paymentMethodValue, isPreferred, accentColor } = props;
    const paymentMethodDisplayName = paymentMethodNames[paymentMethod];
    return (
        <>
        <PaymentMethodButtonModal
            isOpen={isOpen}
            onClose={onClose}
            paymentMethod={paymentMethod}
            paymentMethodDisplayName={paymentMethodDisplayName}
            paymentMethodValue={paymentMethodValue}
        />
        <PseudoBox
            as="button"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            borderWidth={isPreferred ? "2px" : "1px"}
            rounded="2px"
            fontSize="18px"
            fontWeight="semibold"
            bg="white"
            borderColor={isPreferred ? theme.colors[accentColor]['500'] : theme.colors.gray['300']}
            p={4}
            m={2}
            shadow="md"
            color={theme.colors.gray['800']}
            _hover={{
                bg: theme.colors.gray['200'],
                transform: "scale(0.98)",
            }}
            _active={{
                bg: theme.colors.gray['300'],
                transform: "scale(0.96)",
                // TODO: This is somehow getting a black border, should be accentColor.
            }}
            onClick={onOpen}
        >
            <Flex align="center">
                <Icon name={paymentMethod} size="32px" />
                <Text ml={2}>{paymentMethodDisplayName}</Text>
            </Flex>
            {isPreferred && (
                <Text
                    fontSize="xs"
                    color={theme.colors.gray['500']}
                >
                    Preferred
                </Text>
            )}
        </PseudoBox>
        </>
    );
};

PaymentMethodButton.propTypes = {
    paymentMethod: PropTypes.string.isRequired,
    paymentMethodValue: PropTypes.string.isRequired,
    isPreferred: PropTypes.bool,
    accentColor: PropTypes.string,
};

PaymentMethodButton.defaultProps = {
    isPreferred: false,
    accentColor: "orange",
};

export default PaymentMethodButton;
