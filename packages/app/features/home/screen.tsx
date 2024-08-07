import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import Animate from 'react-native-reanimated'
// import { Image } from 'react-native'
// import { Image } from 'react-native'
import { Image } from 'moti'
import { MotiLink } from 'solito/moti'
import { Platform } from 'react-native'
import {X_RAPIDAPI_KEY, X_RAPIDAPI_HOST, ACTUAL_RANDOM_IMAGE_HOSTNAME} from 'app/env';
import useFetch from 'app/hooks/useFetch';
import { styled, StyledComponent } from 'nativewind';
import { ImageBackground } from 'react-native'

// const Image = styled(CustomImage, 'image');

export function HomeScreen() {
  const obj:fetchParams= {
    endpoint: "common",
    query: {
      imageDimensions: {
        height: 500,
        width: 500
      }
    }
  }
  const [joke, jokeImage] = useFetch(obj).data;
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Solito.</H1>
      {/* <Image source={{
        uri: `${jokeImage}`
      }} width={500} height={500} alt='some image'/> */}
      <Image source={{uri: jokeImage, width: 500, height: 500}} alt='image' />
      {/* <ImageBackground className='justify-center items-center' source={{uri: jokeImage}} width={500} height={500}>
        <View className='text-center w-[500px] h-[500px] flex items-center justify-center'>
          <H1 className='text-yellow-600' style={{textShadowRadius:6, textShadowColor: "#000000"}}>Hello World</H1>
        </View>
      </ImageBackground> */}
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-base font-bold">
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}