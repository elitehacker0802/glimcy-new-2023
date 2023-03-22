import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useAuth from '../../../../hooks/useAuth';
import { fData } from '../../../../utils/formatNumber';
import { countries } from '../../../../_mock';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// ----------------------------------------------------------------------

export default function AccountGeneral () {
const { enqueueSnackbar } = useSnackbar();
const { updateUserProfile } = useAuth();
const { user } = useSelector((state) => state.user);
const isMountedRef = useIsMountedRef();

const UpdateUserSchema = Yup.object().shape({
firstName: Yup.string().required('Name is required'),
});

  const defaultValues = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
    phone_number: user?.phone_number || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipcode: user?.zipcode || '',
    about: user?.about || '',
    is_public: user?.is_public || false,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.dir("AWWA")
    console.dir(data)
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   enqueueSnackbar('Update success!');
    // } catch (error) {
    //   console.error(error);
    // }
    
    try {
      await updateUserProfile(
        data.email,
        data.firstName,
        data.lastName,
        data.avatar,
        data.phone_number,
        data.address,
        data.country,
        data.city,
        data.zipcode,
        data.about,
        data.is_public,);
      // const name = useWatch({ control, name: ['firstName', 'lastName'] }) || '';
      // methods.setValue('name', `${methods.getValues('firstName')} ${methods.getValues('lastName')}`);
    } catch (error) {
      console.error("error !", error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    };
  }
  const handleDrop = useCallback(
    (acceptedFiles) => {
      console.log("ACCEPTED FILES: ")
      console.dir( acceptedFiles)
      const file = acceptedFiles[0];
      console.dir(file)

      if (file) {
        setValue(
          'avatar',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
    
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="avatar"
              maxSize={3145728}
              onDrop={handleDrop}
              type="file"
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
              
            />

            <RHFSwitch name="is_public" labelPlacement="start" label="Public Profile" sx={{ mt: 5 }} />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
              <RHFTextField name="email" label="Email Address" />

              <RHFTextField name="phone_number" label="Phone Number" />
              <RHFTextField name="address" label="Address" />

              <RHFSelect name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>


              <RHFTextField name="city" label="City" />
              <RHFTextField name="zipcode" label="Zip/Code" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField name="about" multiline rows={4} label="About" />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}