import { Button, View, TextInput, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from 'yup';
import FlatButton from "../shared/Button";

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a nuber 1-5', (val) => {
            return (parseInt(val) < 6 && parseInt(val) > 0)
        })
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
                validationSchema={reviewSchema}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onBlur={formikProps.handleBlur('title')}
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title && formikProps.errors.title}
                        </Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review body"
                            onBlur={formikProps.handleBlur('body')}
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body && formikProps.errors.body}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review (1-5)"
                            onBlur={formikProps.handleBlur('rating')}
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating && formikProps.errors.rating}
                        </Text>
                        <FlatButton text="submit" onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}