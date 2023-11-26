
from bertopic import BERTopic
from sklearn.datasets import fetch_20newsgroups
%pip install gensim
docs = fetch_20newsgroups(subset='all',  remove=('headers', 'footers', 'quotes'))['data']
topic_nlp = spacy.load('en_core_web_md', exclude=['tagger', 'parser', 'ner', 'attribute_ruler', 'lemmatizer'])
topic_nlp.add_extension('trf_data')
docs[0].add_extension('trf_data')
#topic_nlp = nlp
#docs = [(d) for d in s.split('\n')]

topic_model = BERTopic(embedding_model=topic_nlp)
topics, probs = topic_model.fit_transform(docs)


topic_nlp = spacy.load("en_core_web_md")
topic_nlp.add_pipe("keyword_extractor", last=True, config={"top_n": 10, "min_ngram": 3, "max_ngram": 3,
                                                           "strict": False, "top_n_sent": 3})

# Load the English language model

paragraph = s.split('\n')[0] #"Your paragraph goes here. Where are you going? I told him, actually. Replace this with your actual text."

# Process the paragraph using spaCy
doc = nlp(paragraph)
#doc = nlp(s.split('\n')[0])
# Extract topics from the paragraph
topics = []

for ent in doc.ents:
    topics.append(ent.text)

# Filter out duplicate topics
unique_topics = list(set(topics))
import random
if not unique_topics:
  single_words = list(([token for token in doc if token.text.lower() not in STOP_WORDS and token.is_alpha]))
  unique_topics = random.choices(single_words, k=min(len(single_words), 5))
else:
  single_words = list(([token for token in doc if token.text.lower() not in STOP_WORDS and token.is_alpha]))
  unique_topics = random.choices(single_words, k=min(len(single_words), 5))

# Initialize the Porter Stemmer
stemmer = PorterStemmer()
lemmatizer = nlp.get_pipe("lemmatizer")
print(lemmatizer.mode)  # 'rule'

stemmed = set([token.lemma_ for token in unique_topics])
# Stem the topics
#stemmed_topics = [stemmer.stem(topic) for topic in unique_topics]

print("Extracted Topics:", unique_topics)
#print("Stemmed Topics:", stemmed_topics)

from gensim.test.utils import common_texts
from gensim.models import Word2Vec

model = Word2Vec(sentences=common_texts, vector_size=100, window=5, min_count=1, workers=4)
model.save("word2vec.model")

nlpSim = spacy.load('en_core_web_md')

print("Enter two space-separated words")

simDoc = nlpSim("\n".join(["string theory", "physics", "dimensions", "dogs"]))
print(simDoc[0:2])
print([(idx,tok) for idx,tok in enumerate(doc)]) #[(0, sydney is a), (1, cool), (2, town)]
doc = simDoc
doc = nlp(u"sydney is a cool town")

with doc.retokenize() as retokenizer:
    retokenizer.merge(doc[0:2])
print([(idx,tok) for idx,tok in enumerate(doc)]) #[(0, sydney is a), (1, cool), (2, town)]

with simDoc.retokenize() as retokenizer:
    retokenizer.merge(simDoc[0:2])
    print(simDoc[0:2])
with doc.retokenize() as retokenizer:
    retokenizer.merge(doc[3:5])
    token1, token2 = simDoc[0], doc[2]

    print("%%", token1, token2, "Similarity:", token1.similarity(token2))
print(simDoc[0:2])

#tokens = Token("String theory"), Token("dimensions")
for token in simDoc:
    # Printing the following attributes of each token.
    # text: the word string, has_vector: if it contains
    # a vector representation in the model,
    # vector_norm: the algebraic norm of the vector,
    # is_oov: if the word is out of vocabulary.
    pass
    #print(token.text, token.has_vector, token.vector_norm, token.is_oov)

token1, token2 = tokens[0], tokens[1]

#print("%%", token1, token2, "Similarity:", token1.similarity(token2))



doc = nlp2(s)
"""nlp2(
    "Natural language processing (NLP) is a subfield of linguistics, computer science, and artificial intelligence "
    "concerned with the interactions between computers and human language, in particular how to program computers "
    "to process and analyze large amounts of natural language data. "
)"""

kw_scores = doc._.extract_keywords(n=3)
for keyword, score in kw_scores:
    print(keyword, "-", score)

    In this chat, be as succinct as possible. And put all code in a single block. Code comments are okay, but don't give any additional commentary. 

    How do I remove the final sentence in spacy, in the case where that sentence doesn't end with proper punctuation (i.e., a period, a question mark, etc.)? Do this in a way that maintains the formatting (i.e. newlines, in the case of poetry) of the text.


og_raw_entries = [re.sub(r'\n{3,}', '\n\n', \
                          r.strip()) for r in og_raw.split('###')]
gpt_strm = og_raw_entries[:]
print('starting # entries', len(gpt_strm))
gpt_strm = list(filter(lambda x: len(x.split()) > 30, gpt_strm))
print('first minwords', len(gpt_strm))
gpt_strm = list(filter(lambda x: not contains_url(x), gpt_strm))
print('contains_url', len(gpt_strm))
gpt_strm = list(filter(lambda x: not contains_email(x), gpt_strm))
print('contains_email', len(gpt_strm))
gpt_strm = list(filter(lambda x: not contains_nonstandard_characters(x, MAX_NONSTANDARD), gpt_strm))
print('contains nonstandard', len(gpt_strm))
gpt_strm = list(filter(lambda x: passes_spellcheck(x, SPELL_RATIO), gpt_strm))
print('passes spellcheck', len(gpt_strm))
gpt_strm = list(map(lambda x: remove_last_unpunc_sentences(x, iterations=4), gpt_strm))
gpt_strm = list(filter(lambda x: len(x.split()) > 20, gpt_strm))
print('last minwords', len(gpt_strm))
gpt_strm = list(map(replace_profanity, gpt_strm))
og_list = list(gpt_strm)
print(len(og_raw_entries), len(og_list), len(list(filter_and_clean(og_raw_entries))))



   stems = set([token.lemma_ for token in words])
    return stems
    unique_stems = unique_stems | stems

    for word in words:
        stem = lemmatizer.lemmatize(word)
        if stem not in unique_stems:
            result.append(word)
            unique_stems.add(stem)

    return result

# Load the English language model

paragraph = s.split('\n')[0] #"Your paragraph goes here. Where are you going? I told him, actually. Replace this with your actual text."

# Process the paragraph using spaCy
doc = nlp(paragraph)
#doc = nlp(s.split('\n')[0])
# Extract topics from the paragraph
topics = []

for ent in doc.ents:
    topics.append(ent.text)

# Filter out duplicate topics
unique_topics = list(set(topics))
import random
if not unique_topics:
  single_words = list(([token for token in doc if token.text.lower() not in STOP_WORDS and token.is_alpha]))
  unique_topics = random.choices(single_words, k=min(len(single_words), 5))
else:
  single_words = list(([token for token in doc if token.text.lower() not in STOP_WORDS and token.is_alpha]))
  unique_topics = random.choices(single_words, k=min(len(single_words), 5))

# Initialize the Porter Stemmer
stemmer = PorterStemmer()
lemmatizer = nlp.get_pipe("lemmatizer")
print(lemmatizer.mode)  # 'rule'

stemmed = set([token.lemma_ for token in unique_topics])
# Stem the topics
#stemmed_topics = [stemmer.stem(topic) for topic in unique_topics]

print("Extracted Topics:", unique_topics)
#print("Stemmed Topics:", stemmed_topics)
