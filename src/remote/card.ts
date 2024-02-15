import {
  collection,
  QuerySnapshot,
  query,
  limit,
  startAfter,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants'
import { Card } from '@/models/card'

// cursor 로부터 10개씩 보여준다
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10),
        )

  const cardSnapshot = await getDocs(cardQuery)

  // 불러온 문서 중 가장 마지막 문서를 cursor 로 삼는다
  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}

export async function getCard(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))

  return {
    id,
    ...(snapshot.data() as Card),
  }
}
